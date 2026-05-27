import styled from 'styled-components'
import { Colors } from '../../styles'

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
    background-color: ${Colors.white};
    border: 1px solid ${Colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${Colors.green};
      box-shadow: 0 0 0 3px rgba(16, 172, 132, 0.15);
    }
  }

  small {
    display: block;
    font-size: 12px;
    color: red;
    margin-top: 4px;
    min-height: 16px;
  }
`

export const ErrorMessage = styled.p`
  background-color: rgba(231, 76, 60, 0.12);
  border: 1px solid rgba(231, 76, 60, 0.4);
  color: #e74c3c;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
`

export const SuccessIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${Colors.green};
  color: ${Colors.black};
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.white};
  background-color: ${(props) => (props.$active ? Colors.green : Colors.black)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
