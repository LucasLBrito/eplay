import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from './index'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${({ background }) =>
    background === 'gray' ? Cores.cinza : Cores.preta};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? Cores.preta : Cores.cinza};

    p {
      font-size: 14px;
      line-height: 22px;
      max-width: 640px;
    }
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
