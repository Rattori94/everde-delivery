import styled from "styled-components"
import Logo from "../Logo"
import { Facebook, Instagram, Twitter } from "../Icons"
import { cores } from "../../styles"

const anoAtual = new Date().getFullYear()

const FooterBar = styled.footer`
	background-color: ${cores.claro};
	height: 298px;
	padding-top: 40px;
	text-align: center;
	margin-top: 120px;

	@media (max-width: 768px) {
		height: auto;
		padding-bottom: 40px;
		margin-top: 80px;
	}
`

const Redes = styled.div`
	margin: 32px 0 80px;
	display: flex;
	justify-content: center;
	gap: 8px;
	color: ${cores.verde};

	a {
		line-height: 0;
		transition: opacity 0.2s;

		&:hover {
			opacity: 0.7;
		}
	}

	@media (max-width: 768px) {
		margin: 32px 0 40px;
	}
`

const Texto = styled.p`
	font-size: 10px;
	line-height: normal;
	color: ${cores.verde};
	max-width: 480px;
	margin: 0 auto;
	padding: 0 16px;
`

const Footer = () => (
	<FooterBar>
		<Logo />
		<Redes>
			<a href="#" aria-label="Instagram do everde">
				<Instagram />
			</a>
			<a href="#" aria-label="Facebook do everde">
				<Facebook />
			</a>
			<a href="#" aria-label="Twitter do everde">
				<Twitter />
			</a>
		</Redes>
		<Texto>
			<Texto>
				© {anoAtual} Everde. O everde é uma plataforma para divulgação de
				estabelecimentos de comida vegana, desenvolvido por Rafael Arcangelo
				Vettori.
			</Texto>
		</Texto>
	</FooterBar>
)

export default Footer
