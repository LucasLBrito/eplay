import { useParams } from 'react-router-dom'
import Hero from '../../components/hero'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}

export default Product
