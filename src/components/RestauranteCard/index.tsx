import Tag from '../Tag'
import { Estrela } from '../Icons'
import { getDescricao } from '../../utils'
import * as S from './styles'

type Props = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: number
  destacado: boolean
}

const RestauranteCard = ({
  id,
  titulo,
  descricao,
  capa,
  tipo,
  avaliacao,
  destacado
}: Props) => (
  <S.Card>
    <S.Capa src={capa} alt={`Capa do restaurante ${titulo}`} />
    <S.Tags>
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </S.Tags>
    <S.Infos>
      <S.Titulo>
        <h3>{titulo}</h3>
        <span>
          {avaliacao.toFixed(1).replace('.', ',')}
          <Estrela size={21} />
        </span>
      </S.Titulo>
      <S.Descricao>{getDescricao(descricao, 250)}</S.Descricao>
      <S.SaibaMais to={`/restaurante/${id}`}>Saiba mais</S.SaibaMais>
    </S.Infos>
  </S.Card>
)

export default RestauranteCard
