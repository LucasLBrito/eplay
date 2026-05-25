import styled from 'styled-components'
import { Cores } from '../../styles'

type inputProps = {
  maxWidth?: string
}

type RowProps = {
  margin?: string
}

type TabButtonProps = {
  $active?: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  margin-top: ${(props) => props.margin || '0'};
  column-gap: 24px;
  align-items: flex-end;
`
export const InputGroup = styled.div<inputProps>`
  max-width: ${(props) => props.maxWidth || '100%'};
  flex: auto;
  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${Cores.Branca};
    border: 1px solid ${Cores.Branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }

  small {
    display: block;
    font-size: 12px;
    color: red;
    margin-top: 4px;
    min-height: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Cores.Branca};
  background-color: ${(props) => (props.$active ? Cores.verde : Cores.preta)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
