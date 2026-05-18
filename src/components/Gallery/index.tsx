import { useState } from 'react'

import hogwarts1 from '../../assets/images/hogwart_galery.png'
import hogwarts2 from '../../assets/images/Hogwarts-Legacy.jpg'
import hogwarts3 from '../../assets/images/hogwarts-legacy_nfcv.1920.webp'
import play from '../../assets/images/play.png'
import Zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

interface GalleryItem {
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
  name: string
}

interface ModalState extends GalleryItem {
  isOpen: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  // pode usar a interface modalState para criar o estado inicial, fazendo assim que todos os valores sejam preenchidos
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    url: '',
    type: 'image'
  })

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
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mockGallery.map((media) => (
            <Item
              key={media.url}
              onClick={() => {
                setModalState({
                  isOpen: true,
                  url: media.url,
                  type: media.type
                })
              }}
            >
              <img src={getMediaCover(media)} alt={name} />
              <Action>
                <img src={getMediaIcon(media)} alt="play" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modalState.isOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="fechar"
              onClick={() =>
                setModalState({ isOpen: false, url: '', type: 'image' })
              }
            />
          </header>
          {modalState.type === 'video' ? (
            <iframe
              className="imgModal"
              src={modalState.url}
              title={name}
              allowFullScreen
              frameBorder={0}
            />
          ) : (
            <img className="imgModal" src={modalState.url} alt={name} />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() =>
            setModalState({ isOpen: false, url: '', type: 'image' })
          }
        />
      </Modal>
    </>
  )
}
export default Gallery
