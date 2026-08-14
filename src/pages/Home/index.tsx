import styled from 'styled-components'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import RestauranteCard from '../../components/RestauranteCard'
import { useGetRestaurantesQuery } from '../../services/api'
import { breakpoints } from '../../styles'

/** Figma "listagem": 2 colunas, 80px entre colunas e 48px entre linhas. */
const Lista = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Hero />
      <div className="container">
        {isLoading && <Loader />}
        <Lista>
          {restaurantes?.map((restaurante) => (
            <li key={restaurante.id}>
              <RestauranteCard
                id={restaurante.id}
                titulo={restaurante.titulo}
                descricao={restaurante.descricao}
                capa={restaurante.capa}
                tipo={restaurante.tipo}
                avaliacao={restaurante.avaliacao}
                destacado={restaurante.destacado}
              />
            </li>
          ))}
        </Lista>
      </div>
    </>
  )
}

export default Home
