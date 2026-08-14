import styled from 'styled-components'
import { Link } from 'react-router-dom'
import textura from '../../assets/textura.svg'
import { breakpoints, cores } from '../../styles'

/** Figma "Header": faixa de 186px com a mesma textura do Hero. */
export const HeaderBar = styled.header`
  background-image: url(${textura});
  background-repeat: repeat;
  height: 186px;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 24px 0;

    .container {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
  }
`

export const Voltar = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.verde};
  flex: 1;
`

export const Marca = styled(Link)`
  line-height: 0;
`

export const CartButton = styled.button`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.verde};
  flex: 1;
  text-align: right;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`
