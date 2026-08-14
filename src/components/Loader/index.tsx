import styled, { keyframes } from 'styled-components'
import { cores } from '../../styles'

const girar = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0;
`

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${cores.claro};
  border-top-color: ${cores.verde};
  border-radius: 50%;
  animation: ${girar} 0.8s linear infinite;
`

const Loader = () => (
  <Wrapper role="status" aria-label="Carregando">
    <Spinner />
  </Wrapper>
)

export default Loader
