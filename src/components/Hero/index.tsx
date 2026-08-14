import styled from "styled-components"
import Logo from "../Logo"
import textura from "../../assets/textura.svg"
import { breakpoints, cores } from "../../styles"

/** Figma "Hero": 384px de altura, logo a 64px do topo, chamada 138px abaixo do logo. */
const HeroBar = styled.div`
	background-image: url(${textura});
	background-repeat: repeat;
	height: 384px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 64px;

	@media (max-width: ${breakpoints.tablet}) {
		height: auto;
		padding: 40px 16px 48px;
	}
`

const Chamada = styled.h2`
	margin-top: 138px;
	font-size: 36px;
	font-weight: 900;
	line-height: normal;
	color: ${cores.verde};
	text-align: center;

	@media (max-width: ${breakpoints.tablet}) {
		margin-top: 48px;
		font-size: 24px;
	}
`

const Hero = () => (
	<HeroBar>
		<Logo />
		<Chamada>
			Comida de verdade, 100% vegetal,
			<br />
			na porta da sua casa
		</Chamada>
	</HeroBar>
)

export default Hero
