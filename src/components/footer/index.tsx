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
              <LinkFooter to="#adventure">Aventura</LinkFooter>
            </li>
            <li>
              <LinkFooter to="#rpg">RPG</LinkFooter>
            </li>
            <li>
              <LinkFooter to="#action">Ação</LinkFooter>
            </li>
            <li>
              <LinkFooter to="#sports">Esportes</LinkFooter>
            </li>
            <li>
              <LinkFooter to="#simulation">Simulação</LinkFooter>
            </li>
            <li>
              <LinkFooter to="#fighting">Luta</LinkFooter>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rapido</SectionTitle>
          <ul>
            <li>
              <LinkFooter to="#on-sale">Promoções</LinkFooter>
            </li>
            <li>
              <LinkFooter to="#soon">Em breve</LinkFooter>
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
