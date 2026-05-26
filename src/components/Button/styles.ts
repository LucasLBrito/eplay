import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

import { Props } from '../Button'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${({ $variant }) => ($variant === 'primary' ? Cores.verde : Cores.Branca)};
  color: ${Cores.Branca};
  background-color: ${({ $variant }) =>
    $variant === 'primary' ? Cores.verde : 'transparent'};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: filter 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.12);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 172, 132, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }
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
  display: inline-block;
  transition: filter 0.2s ease, transform 0.15s ease;

  &:hover {
    filter: brightness(1.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${Cores.Branca};
    outline-offset: 3px;
  }
`
