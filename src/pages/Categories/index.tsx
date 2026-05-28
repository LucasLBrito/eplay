import ProductsList from '../../components/ProductsList'
import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightingQuery,
  useGetRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: acao, isLoading: isLoadingAcao } = useGetActionQuery()
  const { data: esportes, isLoading: isLoadingEsportes } = useGetSportsQuery()
  const { data: simulacao, isLoading: isLoadingSimulacao } =
    useGetSimulationQuery()
  const { data: luta, isLoading: isLoadingLuta } = useGetFightingQuery()
  const { data: rpg, isLoading: isLoadingRpg } = useGetRPGQuery()

  return (
    <div>
      <ProductsList
        title="Ação"
        background="black"
        games={acao}
        isLoading={isLoadingAcao}
        id="action"
      />
      <ProductsList
        title="Esportes"
        background="gray"
        games={esportes}
        isLoading={isLoadingEsportes}
        id="sports"
      />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulacao}
        isLoading={isLoadingSimulacao}
        id="simulation"
      />
      <ProductsList
        title="Luta"
        background="gray"
        games={luta}
        isLoading={isLoadingLuta}
        id="fighting"
      />
      <ProductsList
        title="RPG"
        background="black"
        games={rpg}
        isLoading={isLoadingRpg}
        id="rpg"
      />
    </div>
  )
}

export default Categories
