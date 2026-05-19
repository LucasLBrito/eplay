import { Imagem, Titulo, Precos } from './styles'
import Button from '../button'
import Tag from '../Tag'
import { useEffect, useState } from 'react'
import Game from '../../models/Game'
import { formatPrice } from '../../utils'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button type="link" to={`/product/${game.id}`} title="Comprar Agora">
          Comprar Agora
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
