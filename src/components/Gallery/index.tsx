import { useState } from 'react'
import play from '../../assets/images/play.png'
import Zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

import Section from '../Section'
import { GalleryItem } from '../../models/Game'

import { Items, Item, Action, Modal, ModalContent } from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isOpen: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
    if (item.type === 'video' && item.url.includes('youtube.com/embed/')) {
      const videoId = item.url.split('/embed/')[1]?.split('?')[0]
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      }
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
          {items.map((media) => (
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
