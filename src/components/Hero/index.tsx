import { Banner, Infos } from './styled'
import Tag from '../Tag'
import Button from '../Button'
import Game from '../../models/Game'
import { formatPrice } from '../../utils'
import { useDispatch } from 'react-redux'
import {
  addItem,
  removeItem,
  toggleOpen
} from '../../store/reducers/shopingCart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const AddToCart = () => {
    dispatch(addItem(game))
    dispatch(toggleOpen())
  }
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
              $variant="primary"
              type="button"
              title="Adicionar ao carrinho"
              onClick={AddToCart}
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
