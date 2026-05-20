import { CardWrapper } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      {children}
    </CardWrapper>
  )
}

export default Card
