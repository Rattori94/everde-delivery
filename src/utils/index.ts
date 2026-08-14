export const formataPreco = (preco = 0) =>
	new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(preco)

export const getDescricao = (descricao: string, limite = 95) => {
	if (descricao.length > limite) {
		return `${descricao.slice(0, limite - 3)}...`
	}
	return descricao
}
