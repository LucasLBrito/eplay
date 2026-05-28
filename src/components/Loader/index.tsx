import { PacmanLoader } from 'react-spinners'
import { LoaderWrapper } from './styles'
import { Colors } from '../../styles'

const Loader = () => (
  <LoaderWrapper data-testid="loader">
    <PacmanLoader color={Colors.green} />
  </LoaderWrapper>
)

export default Loader
