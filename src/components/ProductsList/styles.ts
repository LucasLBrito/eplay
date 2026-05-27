import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { Props } from './index'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${({ background }) =>
    background === 'gray' ? Colors.gray : Colors.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? Colors.black : Colors.gray};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
