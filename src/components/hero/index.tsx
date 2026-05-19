import { Banner, Infos } from './styled'
import Tag from '../Tag'
import Button from '../button'
import Game from '../../models/Game'
import { formatPrice } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.old && (
              <>
                De <span>{formatPrice(game.prices.old)}</span> por:
              </>
            )}
            {game.prices.current && <>{formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Adicionar ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
