import Product from '../Product'
import Loader from '../Loader'
import { Container, List, Title } from './styles'
import { Game } from '../../models/Game'
import { formatPrice } from '../../utils'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading?: boolean
}

const ProductsList = ({
  title,
  background,
  games = [],
  id,
  isLoading
}: Props) => {
  const getTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices?.discount) {
      tags.push(`-${game.prices.discount}%`)
    }
    if (game.prices?.current) {
      tags.push(formatPrice(game.prices.current))
    }
    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        {isLoading ? (
          <Loader />
        ) : (
          <List>
            {games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  title={game.name}
                  category={game.details.category}
                  platform={game.details.system}
                  description={game.description}
                  infos={getTags(game)}
                  image={game.media.thumbnail}
                />
              </li>
            ))}
          </List>
        )}
      </div>
    </Container>
  )
}

export default ProductsList
