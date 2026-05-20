import { HeaderBar, Links, LinkItem, BtnCart } from './styles'
import logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

import { toggleOpen } from '../../store/reducers/shopingCart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.Cart)

  const toggleCart = () => {
    dispatch(toggleOpen())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <BtnCart onClick={toggleCart}>
        {items.length} - produto(s)
        <img src={Carrinho} alt="Carrinho" />
      </BtnCart>
    </HeaderBar>
  )
}

export default Header
