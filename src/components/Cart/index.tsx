import Button from '../button'
import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import starWArs from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <CartItem>
            <img src={starWArs} alt="Star Wars" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 99,99</span>
              <button type="button"></button>
            </div>
          </CartItem>
          <CartItem>
            <img src={starWArs} alt="Star Wars" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 99,99</span>
            </div>
            <button type="button"></button>
          </CartItem>
        </ul>
        <Quantity>2 jogos no carrinhos</Quantity>
        <Prices>
          Total: R$ 199,98 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="clique para finalizar a compra" type="button">
          Continuar com a Comprar
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
