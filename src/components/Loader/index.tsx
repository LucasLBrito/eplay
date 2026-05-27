import styled, { keyframes } from 'styled-components'
import { Colors } from '../../styles'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  width: 100%;
`

const Spinner = styled.div`
  width: 44px;
  height: 44px;
  border: 4px solid ${Colors.lightGray};
  border-top-color: ${Colors.green};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`

const Loader = () => (
  <LoaderWrapper data-testid="loader">
    <Spinner />
  </LoaderWrapper>
)

export default Loader
