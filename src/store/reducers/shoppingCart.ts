import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../models/Game'

type ShoppingCartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: ShoppingCartState = {
  items: [],
  isOpen: false
}

const shoppingCartSlice = createSlice({
  name: 'Cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Game>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<Game['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, toggleOpen, clearCart } =
  shoppingCartSlice.actions
export default shoppingCartSlice.reducer
