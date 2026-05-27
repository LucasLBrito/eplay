import { Links, LinkItem } from '../styles'
import { Nav } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const NavMobile = ({ isOpen, onClose }: Props) => (
  <Nav $isOpen={isOpen}>
    <Links>
      <LinkItem>
        <Link to="/categories" onClick={onClose}>
          Categorias
        </Link>
      </LinkItem>
      <LinkItem>
        <Link to="/" onClick={onClose}>
          Novidades
        </Link>
      </LinkItem>
      <LinkItem>
        <Link to="/" onClick={onClose}>
          Promoções
        </Link>
      </LinkItem>
    </Links>
  </Nav>
)

export default NavMobile
