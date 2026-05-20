import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardWrapper = styled.div`
  border-radius: 8px;
  background-color: ${Cores.cinza};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    color: ${Cores.Branca};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .marginTop {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    color: ${Cores.cinzaClaro};
    line-height: 22px;
  }
`
