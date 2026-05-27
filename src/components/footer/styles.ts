import styled from 'styled-components'
import { Colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const FooterWrapper = styled.footer`
  background-color: ${Colors.gray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.white};
`

export const LinkFooter = styled(HashLink)`
  color: ${Colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
  ul {
    display: flex;
  }
`
