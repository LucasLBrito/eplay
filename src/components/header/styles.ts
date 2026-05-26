import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;

  a {
    color: ${Cores.Branca};
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }
`

export const LinkItem = styled.li`
  list-style: none;
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 8px 0;
    }
  }
`

export const BtnCart = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${Cores.Branca};
  transition: color 0.2s ease, transform 0.15s ease;

  img {
    margin-left: 16px;
  }

  &:hover {
    color: ${Cores.verde};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const CartBadge = styled.span`
  background-color: ${Cores.verde};
  color: ${Cores.preta};
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  margin-right: 6px;
  padding: 0 4px;
`

type HamburgerProps = {
  $isOpen: boolean
}

export const HamburgerMenu = styled.div<HamburgerProps>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    display: none;
    height: 3px;
    width: 25px;
    background-color: ${Cores.Branca};
    margin-bottom: 4px;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;

    span {
      display: block;
    }

    ${({ $isOpen }) =>
      $isOpen &&
      `
      span:first-child { transform: rotate(45deg) translate(5px, 5px); }
      span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      span:last-child  { transform: rotate(-45deg) translate(5px, -5px); }
    `}
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  justify-content: space-between;

  .header-content {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
