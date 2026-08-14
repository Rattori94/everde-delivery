import styled from "styled-components"
import { cores } from "../../styles"

export const Card = styled.li`
	background-color: ${cores.verde};
	padding: 8px;
	min-height: 338px;
	display: flex;
	flex-direction: column;
`

export const Foto = styled.img`
	width: 100%;
	height: 167px;
	object-fit: cover;
	display: block;
`

export const Titulo = styled.h3`
	margin-top: 8px;
	font-size: 16px;
	font-weight: 900;
	line-height: normal;
	color: ${cores.claro};
`

export const Descricao = styled.p`
	margin-top: 8px;
	font-size: 14px;
	line-height: 22px;
	color: ${cores.claro};
	flex: 1;
`

export const Botao = styled.button`
	margin-top: 8px;
	width: 100%;
	height: 24px;
	background-color: ${cores.claro};
	color: ${cores.verde};
	font-size: 14px;
	font-weight: 700;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.85;
	}
`
