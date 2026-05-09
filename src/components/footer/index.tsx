import { FooterSection, FooterWrapper, Link, SectionTitle } from './styles'

const dataAtual = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <ul>
            <li>
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Ação</Link>
            </li>
            <li>
              <Link>Aventura</Link>
            </li>
            <li>
              <Link>Esportes</Link>
            </li>
            <li>
              <Link>Simulação</Link>
            </li>
            <li>
              <Link>Estratégia</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rapido</SectionTitle>
          <ul>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em breve</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <p>{dataAtual} - &copy; Eplay. Todos os direitos reservados.</p>
        </FooterSection>
      </div>
    </FooterWrapper>
  )
}

export default Footer
