import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import shoppingCardReducer from './reducers/shopingCart'

export const store = configureStore({
  reducer: {
    Cart: shoppingCardReducer,
    [api.reducerPath]: api.reducer
    // your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
