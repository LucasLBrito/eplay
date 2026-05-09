import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterWrapper = styled.footer`
  background-color: ${Cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${Cores.Branca};
`

export const Link = styled.a`
  color: ${Cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
  ul {
    display: flex;
  }
`
