import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes, isLoading: isLoadingPromocoes } = useGetOnSaleQuery()
  const { data: emBreve, isLoading: isLoadingEmBreve } = useGetSoonQuery()

  return (
    <div>
      <Banner />
      <ProductsList
        title="Promoções"
        background="gray"
        games={promocoes}
        isLoading={isLoadingPromocoes}
        id="on-sale"
      />
      <ProductsList
        title="Em breve"
        background="black"
        games={emBreve}
        isLoading={isLoadingEmBreve}
        id="soon"
      />
    </div>
  )
}

export default Home
