import Tag from '../Tag'
import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  Title: string
  categoria: string
  plataforma: string
  descricao: string
  infos: string[]
  imagem: string
}

const Product = ({
  Title,
  categoria,
  plataforma,
  descricao,
  infos,
  imagem
}: Props) => {
  return (
    <Card>
      <img src={imagem} alt={Title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{Title}</Titulo>
      <Tag>{categoria}</Tag>
      <Tag>{plataforma}</Tag>
      <Descricao>{descricao}</Descricao>
    </Card>
  )
}

export default Product
