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
        <a href="#" onClick={onClose}>
          Novidades
        </a>
      </LinkItem>
      <LinkItem>
        <a href="#" onClick={onClose}>
          Promoções
        </a>
      </LinkItem>
    </Links>
  </Nav>
)

export default NavMobile
