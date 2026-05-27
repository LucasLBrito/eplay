import Tag from '../Tag'
import { Card, Title, Description, Infos } from './styles'

type Props = {
  title: string
  category: string
  platform: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  id,
  title,
  category,
  platform,
  description,
  infos,
  image
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 100) {
      return text.slice(0, 100) + '...'
    }
    return text
  }
  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{platform}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
