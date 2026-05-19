import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../models/Game'

type ShoppingCardState = {
  items: Game[]
}

const initialState: ShoppingCardState = {
  items: []
}

const shoppingCardSlice = createSlice({
  name: 'Cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<Game['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = shoppingCardSlice.actions
export default shoppingCardSlice.reducer
