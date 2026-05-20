import styled from 'styled-components'
import { Cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const FooterWrapper = styled.footer`
  background-color: ${Cores.cinza};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${Cores.Branca};
`

export const LinkFooter = styled(HashLink)`
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
