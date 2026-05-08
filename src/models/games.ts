class Game {
  nome: string
  categoria: string
  plataforma: string
  descricao: string
  infos: string[]
  imagem: string
  id: number

  constructor(
    id: number,
    nome: string,
    categoria: string,
    plataforma: string,
    descricao: string,
    infos: string[],
    imagem: string
  ) {
    this.id = id
    this.nome = nome
    this.categoria = categoria
    this.plataforma = plataforma
    this.descricao = descricao
    this.infos = infos
    this.imagem = imagem
  }
}

export default Game
