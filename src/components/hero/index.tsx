import { Banner, Infos } from './styled'
import BannerImage from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../button'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            De <span>R$ 250,00</span> por: R$ 125,00
          </p>
          <Button variant="primary" type="button" title="Adicionar ao carrinho">
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
