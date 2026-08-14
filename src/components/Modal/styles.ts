import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

/** Figma "modal": conteúdo de 1024x344, padding 32px, imagem 280x280, gap de 24px. */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4;
`

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const Conteudo = styled.div`
  position: relative;
  background-color: ${cores.verde};
  color: ${cores.branco};
  max-width: 1024px;
  width: 100%;
  min-height: 344px;
  padding: 32px;
  display: flex;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 24px;
    max-height: 90vh;
    overflow-y: auto;
  }
`

export const Foto = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 200px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: normal;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    align-self: flex-start;
    margin-top: 24px;
    height: 24px;
    padding: 0 8px;
    background-color: ${cores.claro};
    color: ${cores.verde};
    font-size: 14px;
    font-weight: 700;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }
`

export const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  color: ${cores.branco};
  line-height: 0;
`
