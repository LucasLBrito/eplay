import hogwarts1 from '../../assets/images/hogwart_galery.png'
import Section from '../Section'
import { Items, Item } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src={hogwarts1} alt="hogwarts1" />
        </Item>
        <Item>
          <img src={hogwarts1} alt="hogwarts1" />
        </Item>
        <Item>
          <img src={hogwarts1} alt="hogwarts1" />
        </Item>
        <Item>
          <img src={hogwarts1} alt="hogwarts1" />
        </Item>
      </Items>
    </Section>
  )
}
export default Gallery
