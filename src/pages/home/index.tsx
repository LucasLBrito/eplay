import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/games'
import capaResidentEvil4 from '../../assets/images/resident.png'
import capaDiablo from '../../assets/images/diablo.png'
import capaStarwars from '../../assets/images/star_wars.png'
import capaZelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    nome: 'Resident Evil 4',
    categoria: 'Survival Horror',
    plataforma: 'PC',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['-10%', 'R$250'],
    imagem: capaResidentEvil4
  },
  {
    id: 2,
    nome: 'Diablo',
    categoria: 'RPG',
    plataforma: 'PC',
    descricao:
      'Diablo é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard North e publicado pela Blizzard Entertainment...',
    infos: ['-10%', 'R$250'],
    imagem: capaDiablo
  },
  {
    id: 3,
    nome: 'Starwars',
    categoria: 'RPG',
    plataforma: 'PC',
    descricao:
      'Starwars é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard North e publicado pela Blizzard Entertainment...',
    infos: ['-10%', 'R$250'],
    imagem: capaStarwars
  },
  {
    id: 4,
    nome: 'Zelda',
    categoria: 'RPG',
    plataforma: 'PC',
    descricao:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['-10%', 'R$250'],
    imagem: capaZelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    nome: 'Resident Evil 4',
    categoria: 'Survival Horror',
    plataforma: 'PC',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['15/11/2025'],
    imagem: capaResidentEvil4
  },
  {
    id: 6,
    nome: 'Diablo',
    categoria: 'RPG',
    plataforma: 'PC',
    descricao:
      'Diablo é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard North e publicado pela Blizzard Entertainment...',
    infos: ['15/11/2025'],
    imagem: capaDiablo
  },
  {
    id: 7,
    nome: 'Starwars',
    categoria: 'RPG',
    plataforma: 'PC',
    descricao:
      'Starwars é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard North e publicado pela Blizzard Entertainment...',
    infos: ['15/11/2025'],
    imagem: capaStarwars
  },
  {
    id: 8,
    nome: 'Zelda',
    categoria: 'RPG',
    plataforma: 'PC',
    descricao:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['15/11/2025'],
    imagem: capaZelda
  }
]

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductsList title="Promoções" background="gray" games={promocoes} />
      <ProductsList title="Em breve" background="black" games={emBreve} />
    </div>
  )
}

export default Home
