import { ButtonContainer, LinkButtonContainer } from './styles'

interface Props {
  type: 'link' | 'button'
  title?: string
  to?: string
  onClick?: () => void
  children?: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick} title={title}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <LinkButtonContainer to={to as string} title={title}>
      {children}
    </LinkButtonContainer>
  )
}

export default Button
