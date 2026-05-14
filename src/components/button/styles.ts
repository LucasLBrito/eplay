import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

import { Props } from '../button'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${({ variant }) => (variant === 'primary' ? Cores.verde : Cores.Branca)};
  color: ${Cores.Branca};
  background-color: ${({ variant }) =>
    variant === 'primary' ? Cores.verde : 'transparent'};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`
export const LinkButtonContainer = styled(Link)`
  border: 2px solid ${Cores.Branca};
  color: ${Cores.Branca};
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`
