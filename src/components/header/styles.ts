import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  justify-content: space-between;

  a {
    color: ${Cores.Branca};
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  list-style: none;
  margin-right: 16px;
`

export const BtnCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
