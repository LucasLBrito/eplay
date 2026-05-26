import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.3s ease;
`

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${Cores.cinza};
  z-index: 10;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  pointer-events: none;

  &.is-open {
    pointer-events: auto;

    ${Overlay} {
      opacity: 0.5;
    }

    ${SideBar} {
      transform: translateX(0);
    }
  }
`

export const EmptyCart = styled.p`
  color: ${Cores.cinzaClaro};
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.Branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.Branca};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Cores.cinzaClaro};
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${Cores.Branca};
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    color: ${Cores.Branca};
    font-size: 14px;
    font-weight: bold;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0px;
  }
`
