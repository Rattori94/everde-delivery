import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

import Banner from "../../components/Banner"
import Header from "../../components/Header"
import Loader from "../../components/Loader"
import Modal from "../../components/Modal"
import PratoCard from "../../components/PratoCard"
import { useGetRestauranteQuery } from "../../services/api"
import { breakpoints, cores } from "../../styles"
import type { Prato } from "../../types"

const Lista = styled.ul`
	margin-top: 56px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;

	@media (max-width: ${breakpoints.desktop}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${breakpoints.tablet}) {
		grid-template-columns: 1fr;
	}
`

const NaoEncontrado = styled.div`
	padding: 80px 0;
	text-align: center;
	color: ${cores.verde};

	h2 {
		font-size: 24px;
		margin-bottom: 16px;
	}

	a {
		font-weight: 700;
		text-decoration: underline;
	}
`

const Restaurante = () => {
	const { id } = useParams<{ id: string }>()
	const { data: restaurante, isLoading, isError } = useGetRestauranteQuery(id!)
	const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

	if (isLoading) {
		return (
			<>
				<Header />
				<Loader />
			</>
		)
	}

	if (isError || !restaurante) {
		return (
			<>
				<Header />
				<NaoEncontrado className="container">
					<h2>Restaurante não encontrado</h2>
					<Link to="/">Voltar para a lista de restaurantes</Link>
				</NaoEncontrado>
			</>
		)
	}

	return (
		<>
			<Header />
			<Banner
				capa={restaurante.capa}
				tipo={restaurante.tipo}
				titulo={restaurante.titulo}
			/>
			<div className="container">
				<Lista>
					{restaurante.cardapio.map((prato) => (
						<PratoCard
							key={prato.id}
							nome={prato.nome}
							descricao={prato.descricao}
							foto={prato.foto}
							onClick={() => setPratoSelecionado(prato)}
						/>
					))}
				</Lista>
			</div>
			{pratoSelecionado && (
				<Modal
					prato={pratoSelecionado}
					onClose={() => setPratoSelecionado(null)}
				/>
			)}
		</>
	)
}

export default Restaurante
