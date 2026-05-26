import Tag from '../Tag'
import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  title: string
  categoria: string
  plataforma: string
  descricao: string
  infos: string[]
  imagem: string
  id: number
}

const Product = ({
  id,
  title,
  categoria,
  plataforma,
  descricao,
  infos,
  imagem
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 100) + '...'
    }
    return description
  }
  return (
    <Card to={`/product/${id}`}>
      <img src={imagem} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{categoria}</Tag>
      <Tag>{plataforma}</Tag>
      <Descricao>{getDescription(descricao)}</Descricao>
    </Card>
  )
}

export default Product
