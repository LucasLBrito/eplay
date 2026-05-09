import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => {
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
      <LinkCart href="#">
        0 - produto(s)
        <img src={Carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
