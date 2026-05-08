import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.verde};
  color: ${Cores.Branca};
  font-size: ${({ size }) => (size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${({ size }) => (size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`
