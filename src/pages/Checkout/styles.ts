import styled from 'styled-components'
import { Cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`
export const InputGroup = styled.div`
  flex: auto;
  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${Cores.Branca};
    border: 1px solid ${Cores.Branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
