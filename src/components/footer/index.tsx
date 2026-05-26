import {
  FooterSection,
  FooterWrapper,
  LinkFooter,
  SectionTitle
} from './styles'

const dataAtual = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <ul>
            <li>
              <LinkFooter to="#adventure" title="Aventura">
                Aventura
              </LinkFooter>
            </li>
            <li>
              <LinkFooter to="#rpg" title="RPG">
                RPG
              </LinkFooter>
            </li>
            <li>
              <LinkFooter to="#action" title="Ação">
                Ação
              </LinkFooter>
            </li>
            <li>
              <LinkFooter to="#sports" title="Esportes">
                Esportes
              </LinkFooter>
            </li>
            <li>
              <LinkFooter to="#simulation" title="Simulação">
                Simulação
              </LinkFooter>
            </li>
            <li>
              <LinkFooter to="#fighting" title="Luta">
                Luta
              </LinkFooter>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rapido</SectionTitle>
          <ul>
            <li>
              <LinkFooter to="#on-sale" title="Promoções">
                Promoções
              </LinkFooter>
            </li>
            <li>
              <LinkFooter to="#soon" title="Em breve">
                Em breve
              </LinkFooter>
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
