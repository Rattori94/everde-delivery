import styled from 'styled-components'
import { cores } from '../../styles'

/** Figma: altura 26px, Roboto Bold 12px, texto claro sobre a cor primária. */
const Tag = styled.div`
  height: 26px;
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  background-color: ${cores.verde};
  color: ${cores.claro};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
`

export default Tag
