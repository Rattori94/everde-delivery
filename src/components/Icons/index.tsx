type IconProps = {
	size?: number
	className?: string
}

export const Estrela = ({ size = 21, className }: IconProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.34l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.95L12 2.5z" />
	</svg>
)

export const Fechar = ({ size = 16, className }: IconProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2.5"
		strokeLinecap="round"
		aria-hidden="true"
	>
		<path d="M5 5l14 14M19 5L5 19" />
	</svg>
)

export const Lixeira = ({ size = 16, className }: IconProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 11v6M14 11v6" />
	</svg>
)

export const Instagram = ({ size = 24, className }: IconProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 5.4h.02c1.79 0 2.02.01 2.72.04.71.03 1.19.14 1.61.31.44.17.81.4 1.18.77.37.37.6.74.77 1.18.16.42.28.9.31 1.61.03.71.04.93.04 2.72 0 1.79-.01 2.02-.04 2.72-.03.71-.15 1.19-.31 1.61a3.3 3.3 0 01-.77 1.18c-.37.37-.74.6-1.18.77-.42.16-.9.28-1.61.31-.71.03-.93.04-2.72.04-1.79 0-2.02-.01-2.72-.04-.71-.03-1.19-.15-1.61-.31a3.3 3.3 0 01-1.18-.77 3.3 3.3 0 01-.77-1.18c-.16-.42-.28-.9-.31-1.61C5.4 14.02 5.4 13.79 5.4 12c0-1.79.01-2.02.04-2.72.03-.71.15-1.19.31-1.61.17-.44.4-.81.77-1.18.37-.37.74-.6 1.18-.77.42-.16.9-.28 1.61-.31.62-.03.88-.04 2.19-.04zm1.28 1.5h-1.28c-1.75 0-1.96.01-2.65.04-.64.03-.99.14-1.22.23-.31.12-.53.26-.76.49-.23.23-.37.45-.49.76-.09.23-.2.58-.23 1.22-.03.69-.04.9-.04 2.65 0 1.75.01 1.96.04 2.65.03.64.14.99.23 1.22.12.31.26.53.49.76.23.23.45.37.76.49.23.09.58.2 1.22.23.69.03.9.04 2.65.04 1.75 0 1.96-.01 2.65-.04.64-.03.99-.14 1.22-.23.31-.12.53-.26.76-.49.23-.23.37-.45.49-.76.09-.23.2-.58.23-1.22.03-.69.04-.9.04-2.65 0-1.75-.01-1.96-.04-2.65-.03-.64-.14-.99-.23-1.22a2.05 2.05 0 00-.49-.76 2.05 2.05 0 00-.76-.49c-.23-.09-.58-.2-1.22-.23-.62-.03-.86-.04-2.37-.04zm-1.28 2.55a3.55 3.55 0 110 7.1 3.55 3.55 0 010-7.1zm0 1.5a2.05 2.05 0 100 4.1 2.05 2.05 0 000-4.1zm3.72-2.67a.83.83 0 110 1.66.83.83 0 010-1.66z" />
	</svg>
)

export const Facebook = ({ size = 24, className }: IconProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 0a12 12 0 00-1.88 23.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0012 0z" />
	</svg>
)

export const Twitter = ({ size = 24, className }: IconProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.9 9.42c.01.13.01.26.01.39 0 3.98-3.03 8.57-8.57 8.57-1.7 0-3.29-.5-4.62-1.36.24.03.47.04.72.04a6.06 6.06 0 003.74-1.29 3.02 3.02 0 01-2.82-2.09c.19.03.37.05.57.05.27 0 .55-.04.8-.11a3.01 3.01 0 01-2.42-2.96v-.04c.4.23.87.37 1.36.38a3.01 3.01 0 01-.93-4.03 8.56 8.56 0 006.21 3.15 3.4 3.4 0 01-.08-.69 3.01 3.01 0 015.21-2.06 5.93 5.93 0 001.91-.73 3 3 0 01-1.32 1.66 6.03 6.03 0 001.73-.46c-.4.6-.91 1.13-1.5 1.58z" />
	</svg>
)
