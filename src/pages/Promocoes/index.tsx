import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery } from '../../services/api'

const Promocoes = () => {
  const { data: games, isLoading } = useGetOnSaleQuery()

  return (
    <div>
      <ProductsList
        title="Promoções"
        background="gray"
        games={games}
        isLoading={isLoading}
        id="promocoes"
      />
    </div>
  )
}

export default Promocoes
