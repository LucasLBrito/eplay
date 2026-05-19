import { useState, useEffect } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../../models/Game'

const Categories = () => {
  const [acao, setAcao] = useState<Game[]>([])
  const [esportes, setEsportes] = useState<Game[]>([])
  const [simulacao, setSimulacao] = useState<Game[]>([])
  const [luta, setLuta] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setAcao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setEsportes(res))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulacao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setLuta(res))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))
  }, [])

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
