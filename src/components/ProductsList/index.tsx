import Product from '../Product'
import { Container, List, Title } from './styles'
import capaDoJogo from '../../assets/images/diablo.png'
import Game from '../../models/games'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              Title={game.nome}
              categoria={game.categoria}
              plataforma={game.plataforma}
              descricao={game.descricao}
              infos={game.infos}
              imagem={game.imagem}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
