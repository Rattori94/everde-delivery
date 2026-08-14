import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Fechar as IconeFechar } from '../Icons'
import { add } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'
import type { Prato } from '../../types'
import * as S from './styles'

type Props = {
  prato: Prato
  onClose: () => void
}

const Modal = ({ prato, onClose }: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', aoTeclar)
    return () => document.removeEventListener('keydown', aoTeclar)
  }, [onClose])

  const adicionar = () => {
    dispatch(add(prato))
    onClose()
  }

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.Container role="dialog" aria-modal="true" aria-label={prato.nome}>
        <S.Conteudo>
          <S.Fechar onClick={onClose} aria-label="Fechar">
            <IconeFechar />
          </S.Fechar>
          <S.Foto src={prato.foto} alt={prato.nome} />
          <S.Infos>
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p>Serve: {prato.porcao}</p>
            <button onClick={adicionar}>
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </button>
          </S.Infos>
        </S.Conteudo>
      </S.Container>
    </>
  )
}

export default Modal
