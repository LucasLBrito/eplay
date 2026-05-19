import ProductsList from '../../components/ProductsList'
import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightingQuery,
  useGetRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: acao } = useGetActionQuery()
  const { data: esportes } = useGetSportsQuery()
  const { data: simulacao } = useGetSimulationQuery()
  const { data: luta } = useGetFightingQuery()
  const { data: rpg } = useGetRPGQuery()

  if (!acao || !esportes || !simulacao || !luta || !rpg) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ProductsList title="Ação" background="black" games={acao} />
      <ProductsList title="Esportes" background="gray" games={esportes} />
      <ProductsList title="Simulação" background="black" games={simulacao} />
      <ProductsList title="Luta" background="gray" games={luta} />
      <ProductsList title="RPG" background="black" games={rpg} />
    </div>
  )
}

export default Categories
