import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

/** Figma "apresentacao": 280px de altura, overlay preto 50%, textos a 32px das bordas. */
const Imagem = styled.div<{ $capa: string }>`
	background-image:
		linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${(props) => props.$capa});
	background-size: cover;
	background-position: center;
	height: 280px;

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 25px 0 32px;
	}

	p,
	h2 {
		color: ${cores.branco};
		font-size: 32px;
		line-height: normal;
	}

	p {
		font-weight: 100;
	}

	h2 {
		font-weight: 900;
	}

	@media (max-width: ${breakpoints.tablet}) {
		height: 200px;

		p,
		h2 {
			font-size: 22px;
		}
	}
`

type Props = {
	capa: string
	tipo: string
	titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
	<Imagem $capa={capa} role="img" aria-label={titulo}>
		<div className="container">
			<p>{tipo}</p>
			<h2>{titulo}</h2>
		</div>
	</Imagem>
)

export default Banner
