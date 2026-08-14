import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"
import InputMask from "react-input-mask"

import { Lixeira } from "../Icons"
import { close, clear, remove } from "../../store/reducers/cart"
import { usePurchaseMutation } from "../../services/api"
import { formataPreco } from "../../utils"
import type { RootReducer } from "../../store"
import * as S from "./styles"

type Etapa = "carrinho" | "entrega" | "pagamento" | "confirmacao"

const CAMPOS_ENTREGA = [
	"receiver",
	"description",
	"city",
	"zipCode",
	"number",
] as const

const Cart = () => {
	const dispatch = useDispatch()
	const { itens, aberto } = useSelector((state: RootReducer) => state.cart)
	const [etapa, setEtapa] = useState<Etapa>("carrinho")
	const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

	const total = itens.reduce((acc, item) => acc + item.preco, 0)
	const pagando = etapa === "pagamento"

	useEffect(() => {
		document.body.classList.toggle("hide-scroll", aberto)
	}, [aberto])

	useEffect(() => {
		if (isSuccess) setEtapa("confirmacao")
	}, [isSuccess])

	const form = useFormik({
		initialValues: {
			receiver: "",
			description: "",
			city: "",
			zipCode: "",
			number: "",
			complement: "",
			cardName: "",
			cardNumber: "",
			cardCode: "",
			expiresMonth: "",
			expiresYear: "",
		},
		validationSchema: Yup.object({
			receiver: Yup.string()
				.min(5, "Informe o nome completo")
				.required("Campo obrigatório"),
			description: Yup.string()
				.min(5, "Endereço muito curto")
				.required("Campo obrigatório"),
			city: Yup.string()
				.min(3, "Cidade inválida")
				.required("Campo obrigatório"),
			zipCode: Yup.string()
				.length(9, "CEP incompleto")
				.required("Campo obrigatório"),
			number: Yup.string().required("Campo obrigatório"),
			complement: Yup.string(),

			cardName: pagando
				? Yup.string()
						.min(5, "Informe o nome do cartão")
						.required("Campo obrigatório")
				: Yup.string(),
			cardNumber: pagando
				? Yup.string()
						.length(19, "Número incompleto")
						.required("Campo obrigatório")
				: Yup.string(),
			cardCode: pagando
				? Yup.string().length(3, "CVV incompleto").required("Campo obrigatório")
				: Yup.string(),
			expiresMonth: pagando
				? Yup.string().length(2, "Mês inválido").required("Campo obrigatório")
				: Yup.string(),
			expiresYear: pagando
				? Yup.string().length(4, "Ano inválido").required("Campo obrigatório")
				: Yup.string(),
		}),
		onSubmit: (values) => {
			purchase({
				products: itens.map((item) => ({ id: item.id, price: item.preco })),
				delivery: {
					receiver: values.receiver,
					address: {
						description: values.description,
						city: values.city,
						zipCode: values.zipCode,
						number: Number(values.number),
						complement: values.complement,
					},
				},
				payment: {
					card: {
						name: values.cardName,
						number: values.cardNumber,
						code: Number(values.cardCode),
						expires: {
							month: Number(values.expiresMonth),
							year: Number(values.expiresYear),
						},
					},
				},
			})
		},
	})

	type Campo = keyof typeof form.values

	const temErro = (campo: Campo) =>
		Boolean(form.touched[campo] && form.errors[campo])

	const mensagem = (campo: Campo) =>
		temErro(campo) ? <S.Erro>{form.errors[campo]}</S.Erro> : null

	const irParaPagamento = async () => {
		const erros = await form.validateForm()
		form.setTouched(
			CAMPOS_ENTREGA.reduce(
				(acc, campo) => ({ ...acc, [campo]: true }),
				{} as Record<string, boolean>,
			),
		)

		if (CAMPOS_ENTREGA.every((campo) => !erros[campo])) {
			setEtapa("pagamento")
		}
	}

	const fechar = () => {
		dispatch(close())
		if (etapa === "confirmacao") {
			setEtapa("carrinho")
			form.resetForm()
		}
	}

	const concluir = () => {
		dispatch(clear())
		dispatch(close())
		form.resetForm()
		setEtapa("carrinho")
	}

	return (
		<S.CartContainer $aberto={aberto}>
			<S.Overlay onClick={fechar} />
			<S.Sidebar aria-label="Carrinho">
				{etapa === "carrinho" && (
					<>
						{itens.length === 0 ? (
							<S.Vazio>
								O carrinho está vazio, adicione pelo menos um produto para
								continuar com a compra.
							</S.Vazio>
						) : (
							<>
								<ul>
									{itens.map((item, i) => (
										<S.Item key={`${item.id}-${i}`}>
											<img src={item.foto} alt="" />
											<div>
												<h3>{item.nome}</h3>
												<span>{formataPreco(item.preco)}</span>
											</div>
											<button
												onClick={() => dispatch(remove(item.id))}
												aria-label={`Remover ${item.nome} do carrinho`}
											>
												<Lixeira />
											</button>
										</S.Item>
									))}
								</ul>
								<S.Precos>
									<span>Valor total</span>
									<span>{formataPreco(total)}</span>
								</S.Precos>
								<S.Botao onClick={() => setEtapa("entrega")}>
									Continuar com a entrega
								</S.Botao>
							</>
						)}
					</>
				)}

				{etapa === "entrega" && (
					<form onSubmit={form.handleSubmit}>
						<S.Titulo>Entrega</S.Titulo>
						<S.Campo>
							<label htmlFor="receiver">Quem irá receber</label>
							<input
								id="receiver"
								name="receiver"
								type="text"
								value={form.values.receiver}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								className={temErro("receiver") ? "erro" : ""}
							/>
							{mensagem("receiver")}
						</S.Campo>
						<S.Campo>
							<label htmlFor="description">Endereço</label>
							<input
								id="description"
								name="description"
								type="text"
								value={form.values.description}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								className={temErro("description") ? "erro" : ""}
							/>
							{mensagem("description")}
						</S.Campo>
						<S.Campo>
							<label htmlFor="city">Cidade</label>
							<input
								id="city"
								name="city"
								type="text"
								value={form.values.city}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								className={temErro("city") ? "erro" : ""}
							/>
							{mensagem("city")}
						</S.Campo>
						<S.Linha>
							<S.Campo $flex={1}>
								<label htmlFor="zipCode">CEP</label>
								<InputMask
									id="zipCode"
									name="zipCode"
									type="text"
									mask="99999-999"
									value={form.values.zipCode}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									className={temErro("zipCode") ? "erro" : ""}
								/>
								{mensagem("zipCode")}
							</S.Campo>
							<S.Campo $flex={1}>
								<label htmlFor="number">Número</label>
								<input
									id="number"
									name="number"
									type="text"
									inputMode="numeric"
									value={form.values.number}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									className={temErro("number") ? "erro" : ""}
								/>
								{mensagem("number")}
							</S.Campo>
						</S.Linha>
						<S.Campo>
							<label htmlFor="complement">Complemento (opcional)</label>
							<input
								id="complement"
								name="complement"
								type="text"
								value={form.values.complement}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
							/>
						</S.Campo>
						<S.BotaoPrincipal type="button" onClick={irParaPagamento}>
							Continuar com o pagamento
						</S.BotaoPrincipal>
						<S.Botao type="button" onClick={() => setEtapa("carrinho")}>
							Voltar para o carrinho
						</S.Botao>
					</form>
				)}

				{etapa === "pagamento" && (
					<form onSubmit={form.handleSubmit}>
						<S.Titulo>Pagamento - Valor a pagar {formataPreco(total)}</S.Titulo>
						<S.Campo>
							<label htmlFor="cardName">Nome no cartão</label>
							<input
								id="cardName"
								name="cardName"
								type="text"
								value={form.values.cardName}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								className={temErro("cardName") ? "erro" : ""}
							/>
							{mensagem("cardName")}
						</S.Campo>
						<S.Linha>
							<S.Campo $flex={3}>
								<label htmlFor="cardNumber">Número do cartão</label>
								<InputMask
									id="cardNumber"
									name="cardNumber"
									type="text"
									mask="9999 9999 9999 9999"
									value={form.values.cardNumber}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									className={temErro("cardNumber") ? "erro" : ""}
								/>
								{mensagem("cardNumber")}
							</S.Campo>
							<S.Campo $flex={1}>
								<label htmlFor="cardCode">CVV</label>
								<InputMask
									id="cardCode"
									name="cardCode"
									type="text"
									mask="999"
									value={form.values.cardCode}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									className={temErro("cardCode") ? "erro" : ""}
								/>
								{mensagem("cardCode")}
							</S.Campo>
						</S.Linha>
						<S.Linha>
							<S.Campo $flex={1}>
								<label htmlFor="expiresMonth">Mês de vencimento</label>
								<InputMask
									id="expiresMonth"
									name="expiresMonth"
									type="text"
									mask="99"
									value={form.values.expiresMonth}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									className={temErro("expiresMonth") ? "erro" : ""}
								/>
								{mensagem("expiresMonth")}
							</S.Campo>
							<S.Campo $flex={1}>
								<label htmlFor="expiresYear">Ano de vencimento</label>
								<InputMask
									id="expiresYear"
									name="expiresYear"
									type="text"
									mask="9999"
									value={form.values.expiresYear}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									className={temErro("expiresYear") ? "erro" : ""}
								/>
								{mensagem("expiresYear")}
							</S.Campo>
						</S.Linha>
						<S.BotaoPrincipal type="submit" disabled={isLoading}>
							{isLoading ? "Finalizando..." : "Finalizar pagamento"}
						</S.BotaoPrincipal>
						<S.Botao type="button" onClick={() => setEtapa("entrega")}>
							Voltar para a edição de endereço
						</S.Botao>
					</form>
				)}

				{etapa === "confirmacao" && data && (
					<>
						<S.Titulo>Pedido realizado - {data.orderId}</S.Titulo>
						<S.Texto>
							Estamos felizes em informar que seu pedido já está em processo de
							preparação e, em breve, será entregue no endereço fornecido.
						</S.Texto>
						<S.Texto>
							Gostaríamos de ressaltar que nossos entregadores não estão
							autorizados a realizar cobranças extras.
						</S.Texto>
						<S.Texto>
							Nossas embalagens são retornáveis: deixe-as com o entregador na
							próxima entrega e ganhe desconto no pedido seguinte.
						</S.Texto>
						<S.Texto>
							Esperamos que desfrute de uma deliciosa e agradável experiência
							gastronômica. Bom apetite!
						</S.Texto>
						<S.Botao onClick={concluir}>Concluir</S.Botao>
					</>
				)}
			</S.Sidebar>
		</S.CartContainer>
	)
}

export default Cart
