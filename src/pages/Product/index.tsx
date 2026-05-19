import { useParams } from 'react-router-dom'
import Hero from '../../components/hero'
import Section from '../../components/Section'
import Galery from '../../components/Gallery'
import cover from '../../assets/images/hogwart_galery.png'
import Game from '../../models/Game'
import { useEffect, useState } from 'react'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais informações" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          Idiomas: O jogo tem suporte aos seguintes idiomas:{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Galery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
