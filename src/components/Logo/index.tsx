import { cores } from "../../styles"

type Props = {
	width?: number
	cor?: string
}

const Logo = ({ width = 125, cor = cores.verde }: Props) => (
	<svg
		width={width}
		height={(width * 57.5) / 125}
		viewBox="0 0 125 57.5"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Everde"
	>
		<rect
			x="1.5"
			y="1.5"
			width="122"
			height="54.5"
			rx="8"
			stroke={cor}
			strokeWidth="3"
		/>
		<text
			x="14"
			y="37"
			fill={cor}
			fontFamily="Roboto, Arial, sans-serif"
			fontSize="22"
			fontWeight="900"
			letterSpacing="-0.4"
		>
			Everde
		</text>
		<g stroke={cor} strokeWidth="2.4" strokeLinecap="round" fill="none">
			<path d="M105 41V23" />
			<path d="M105 31c0-5.5 4.5-10 10-10 0 5.5-4.5 10-10 10z" />
			<path d="M105 27.5c0-4.5-3.5-8-8-8 0 4.5 3.5 8 8 8z" />
		</g>
	</svg>
)

export default Logo
