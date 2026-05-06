import { Imagem, Titulo, Precos } from './styles'
import banner from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Precos>
      </div>
    </Imagem>
  )
}
export default Banner
