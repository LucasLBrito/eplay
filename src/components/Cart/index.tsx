import Button from '../button'
import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { removeItem, toggleOpen } from '../../store/reducers/shopingCart'
import { formatPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.Cart)

  const remove = (id: number) => {
    if (id !== undefined) {
      dispatch(removeItem(id))
    }
  }

  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(toggleOpen())
  }

  const totalPrice = items.reduce((total, item) => {
    return total + (item.prices.current || 0)
  }, 0)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={toggleCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.cover} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
                <button type="button" onClick={() => remove(item.id)}></button>
              </div>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos no carrinhos</Quantity>
        <Prices>
          Total: R$ {formatPrice(totalPrice)} <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="clique para finalizar a compra" type="button">
          Continuar com a Comprar
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
