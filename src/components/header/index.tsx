import { useState } from 'react'
import {
  HeaderBar,
  Links,
  LinkItem,
  BtnCart,
  CartBadge,
  HamburgerMenu,
  HeaderRow
} from './styles'
import NavMobile from './NavMobile'
import logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

import { toggleOpen } from '../../store/reducers/shoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.Cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleCart = () => {
    dispatch(toggleOpen())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div className="header-content">
          <HamburgerMenu
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </HamburgerMenu>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <Link to="/novidades">Novidades</Link>
              </LinkItem>
              <LinkItem>
                <Link to="/promocoes">Promoções</Link>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <BtnCart onClick={toggleCart}>
          {items.length > 0 && <CartBadge>{items.length}</CartBadge>}
          <span>produto(s)</span>
          <img src={Carrinho} alt="Carrinho" />
        </BtnCart>
      </HeaderRow>
      <NavMobile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </HeaderBar>
  )
}

export default Header
