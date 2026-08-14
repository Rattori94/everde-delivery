import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const CartContainer = styled.div<{ $aberto: boolean }>`
	position: fixed;
	inset: 0;
	z-index: 3;
	display: ${(props) => (props.$aberto ? "flex" : "none")};
	justify-content: flex-end;
`

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
	position: relative;
	z-index: 1;
	width: 360px;
	max-width: 100%;
	background-color: ${cores.verde};
	padding: 32px 8px;
	overflow-y: auto;

	@media (max-width: ${breakpoints.tablet}) {
		width: 100%;
	}
`

export const Item = styled.li`
	position: relative;
	height: 100px;
	padding: 8px;
	margin-bottom: 16px;
	background-color: ${cores.claro};
	display: flex;
	gap: 8px;

	img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		flex-shrink: 0;
		display: block;
	}

	h3 {
		font-size: 18px;
		font-weight: 900;
		line-height: normal;
		color: ${cores.verde};
	}

	span {
		display: block;
		margin-top: 16px;
		font-size: 14px;
		line-height: 22px;
		color: ${cores.verde};
	}

	button {
		position: absolute;
		right: 8px;
		bottom: 8px;
		width: 16px;
		height: 16px;
		color: ${cores.verde};
		line-height: 0;
	}
`

export const Precos = styled.p`
	margin: 40px 0 16px;
	display: flex;
	justify-content: space-between;
	color: ${cores.claro};
	font-size: 14px;
	font-weight: 700;
`

export const Botao = styled.button`
	display: block;
	width: 100%;
	height: 24px;
	margin-bottom: 8px;
	background-color: ${cores.claro};
	color: ${cores.verde};
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	transition: opacity 0.2s;

	&:hover:not(:disabled) {
		opacity: 0.85;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`

export const BotaoPrincipal = styled(Botao)`
	margin-top: 24px;
`

export const Vazio = styled.p`
	color: ${cores.claro};
	font-size: 14px;
	line-height: 22px;
	text-align: center;
`

export const Titulo = styled.h3`
	margin-bottom: 16px;
	color: ${cores.claro};
	font-size: 16px;
	font-weight: 700;
	line-height: normal;
`

export const Texto = styled.p`
	margin-bottom: 24px;
	color: ${cores.claro};
	font-size: 14px;
	line-height: 22px;
`

export const Campo = styled.div<{ $flex?: number }>`
	flex: ${(props) => props.$flex ?? "auto"};
	min-width: 0;
	margin-bottom: 8px;

	label {
		display: block;
		margin-bottom: 8px;
		color: ${cores.claro};
		font-size: 14px;
		font-weight: 700;
		line-height: 16px;
	}

	input {
		width: 100%;
		height: 32px;
		padding: 0 8px;
		background-color: ${cores.claro};
		border: 1px solid ${cores.claro};
		color: ${cores.cinza};
		font-size: 14px;
		font-weight: 700;

		&.erro {
			border-color: ${cores.erro};
			background-color: ${cores.erroFundo};
		}
	}
`

export const Erro = styled.span`
	display: block;
	margin-top: 4px;
	color: ${cores.erroFundo};
	font-size: 12px;
	font-weight: 700;
`

export const Linha = styled.div`
	display: flex;
	gap: 34px;

	@media (max-width: ${breakpoints.tablet}) {
		gap: 16px;
	}
`
