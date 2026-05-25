import { ButtonContainer, LinkButtonContainer } from './styles'

export type Props = {
  type: 'link' | 'button'
  title: string
  to?: string
  onClick?: () => void
  children: string
  $variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  $variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        $variant={$variant}
        onClick={onClick}
        title={title}
      >
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
