import { useDispatch, useSelector } from 'react-redux'
import Logo from '../Logo'
import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  return (
    <S.HeaderBar>
      <div className="container">
        <S.Voltar to="/">Restaurantes</S.Voltar>
        <S.Marca to="/">
          <Logo />
        </S.Marca>
        <S.CartButton onClick={() => dispatch(open())}>
          {itens.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header
