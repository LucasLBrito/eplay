import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 16px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    ${TagContainer} {
      margin-right: 8px;
    }
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${Cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      text-decoration: line-through;
      display: block;
    }
  }
`
