import Product from '../Product'
import { Container, List, Title } from './styles'
import { Game } from '../../models/Game'
import { formatPrice } from '../../utils'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ title, background, games, id }: Props) => {
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
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                Title={game.name}
                categoria={game.details.category}
                plataforma={game.details.system}
                descricao={game.description}
                infos={getTags(game)}
                imagem={game.media.thumbnail}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
