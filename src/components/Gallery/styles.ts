import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;

  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: none;
  }
`

export const Item = styled.li`
  position: relative;
  > img {
    border: 2px solid ${Colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img.imgModal {
    width: 100%;
    border-radius: 10px;
    z-index: 3;
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 4;

  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-weight: bold;
      font-size: 18px;
    }

    img {
      cursor: pointer;
      display: block;
      max-width: 100%;
    }
  }
  iframe {
    width: 100%;
    height: 480px;
    border-radius: 10px;
    z-index: 3;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`
