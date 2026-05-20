import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../models/Game'

type ShoppingCardState = {
  items: Game[]
  isOpen: boolean
}

const initialState: ShoppingCardState = {
  items: [],
  isOpen: false
}

const shoppingCardSlice = createSlice({
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
    }
  }
})

export const { addItem, removeItem, toggleOpen } = shoppingCardSlice.actions
export default shoppingCardSlice.reducer
