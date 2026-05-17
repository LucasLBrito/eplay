import hogwarts1 from '../../assets/images/hogwart_galery.png'
import hogwarts2 from '../../assets/images/Hogwarts-Legacy.jpg'
import hogwarts3 from '../../assets/images/hogwarts-legacy_nfcv.1920.webp'
import play from '../../assets/images/play.png'
import Zoom from '../../assets/images/zoom.png'

import Section from '../Section'

import { Items, Item, Action } from './styles'

type GalleryItem = {
  type: 'video' | 'image'
  url: string
}

const mockGallery: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts1
  },
  {
    type: 'image',
    url: hogwarts2
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/yF29baX-IsA?si=y7acsLuDgy2QvKfk'
  },
  {
    type: 'image',
    url: hogwarts3
  }
]
type Props = {
  defaultCover: string
}
const Gallery = ({ defaultCover }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'video') {
      return play
    }
    return Zoom
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mockGallery.map((media) => (
          <Item key={media.url}>
            <img src={getMediaCover(media)} alt="hogwarts1" />
            <Action>
              <img src={getMediaIcon(media)} alt="play" />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}
export default Gallery
