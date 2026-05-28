import { Imagem, Titulo, Precos } from './styles'
import Button from '../Button'
import Tag from '../Tag'
import Loader from '../Loader'
import { formatPrice } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'
import Game from '../../models/Game'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (isLoading) {
    return <Loader />
  }

  const { media, name, prices, id } = game as Game

  return (
    <Imagem style={{ backgroundImage: `url(${media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{name}</Titulo>
          <Precos>
            De <span>{formatPrice(prices.old)}</span> <br />
            por apenas {formatPrice(prices.current)}
          </Precos>
        </div>
        <Button type="link" to={`/product/${id}`} title="Comprar Agora">
          Comprar Agora
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
