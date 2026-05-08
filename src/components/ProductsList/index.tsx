import Product from '../Product'
import { Container, List, Title } from './styles'
import capaDoJogo from '../../assets/images/diablo.png'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            Title="Cyberpunk 2077"
            categoria="RPG"
            plataforma="PC"
            descricao="RPG de ação em mundo aberto"
            infos={['-10%', 'R$250']}
            imagem={capaDoJogo}
          />
          <Product
            Title="Cyberpunk 2077"
            categoria="RPG"
            plataforma="PC"
            descricao="RPG de ação em mundo aberto"
            infos={['-10%', 'R$250']}
            imagem={capaDoJogo}
          />
          <Product
            Title="Cyberpunk 2077"
            categoria="RPG"
            plataforma="PC"
            descricao="RPG de ação em mundo aberto"
            infos={['-10%', 'R$250']}
            imagem={capaDoJogo}
          />
          <Product
            Title="Cyberpunk 2077"
            categoria="RPG"
            plataforma="PC"
            descricao="RPG de ação em mundo aberto"
            infos={['-10%', 'R$250']}
            imagem={capaDoJogo}
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
