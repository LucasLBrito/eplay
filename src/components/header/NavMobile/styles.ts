import styled from 'styled-components'
import { breakpoints, Cores } from '../../../styles'

type NavProps = {
  $isOpen: boolean
}

export const Nav = styled.nav<NavProps>`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    background-color: ${Cores.cinza};
    padding: 16px 24px;
    border-radius: 16px;
    margin-top: -64px;
    margin-bottom: 80px;
  }
`
