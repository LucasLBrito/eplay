import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 18px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
