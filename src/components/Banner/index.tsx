import { Imagem, Titulo, Precos } from './styles'
import Button from '../button'
import banner from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Precos>
        </div>
        <Button type="link" to="/Produto">
          Comprar Agora
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
