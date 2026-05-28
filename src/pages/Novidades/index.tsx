import ProductsList from '../../components/ProductsList'
import { useGetSoonQuery } from '../../services/api'

const Novidades = () => {
  const { data: games, isLoading } = useGetSoonQuery()

  return (
    <div>
      <ProductsList
        title="Próximos lançamentos"
        background="black"
        games={games}
        isLoading={isLoading}
        id="novidades"
      />
    </div>
  )
}

export default Novidades
