import styled from 'styled-components'
import { Cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
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
  margin-right: 16px;
  position: relative;
  > img {
    border: 2px solid ${Cores.Branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;

    &:hover {
      ${Action} {
        opacity: 1;
        transition: opacity 0.5s ease;
      }
    }
  }
`
