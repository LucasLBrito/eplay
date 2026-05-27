import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import shoppingCartReducer from './reducers/shoppingCart'

export const store = configureStore({
  reducer: {
    Cart: shoppingCartReducer,
    [api.reducerPath]: api.reducer
    // your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
