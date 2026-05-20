import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (!promocoes || !emBreve) return <div>Carregando...</div>

  return (
    <div>
      <Banner />
      <ProductsList
        title="Promoções"
        background="gray"
        games={promocoes}
        id="on-sale"
      />
      <ProductsList
        title="Em breve"
        background="black"
        games={emBreve}
        id="soon"
      />
    </div>
  )
}

export default Home
