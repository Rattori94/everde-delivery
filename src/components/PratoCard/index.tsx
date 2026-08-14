import { getDescricao } from "../../utils"
import * as S from "./styles"

type Props = {
	nome: string
	descricao: string
	foto: string
	onClick: () => void
}

const PratoCard = ({ nome, descricao, foto, onClick }: Props) => (
	<S.Card>
		<S.Foto src={foto} alt={nome} />
		<S.Titulo>{nome}</S.Titulo>
		<S.Descricao>{getDescricao(descricao, 140)}</S.Descricao>
		<S.Botao onClick={onClick}>Mais detalhes</S.Botao>
	</S.Card>
)

export default PratoCard
