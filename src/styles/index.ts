import { createGlobalStyle } from "styled-components"

export const cores = {
	verde: "#2F6B4F",
	verdeEscuro: "#20503A",
	claro: "#E8F3E4",
	fundo: "#F5FBF3",
	branco: "#FFFFFF",
	cinza: "#4B4B4B",
	erro: "#B3261E",
	erroFundo: "#FBE3E1",
}

export const breakpoints = {
	desktop: "1024px",
	tablet: "768px",
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}

body {
    background-color: ${cores.fundo};
    color: ${cores.verde};
}

body.hide-scroll {
    overflow: hidden;
}

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1100px) {
        max-width: 90%;
    }
}

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :focus-visible {
    outline: 2px solid ${cores.verde};
    outline-offset: 2px;
  }
`
