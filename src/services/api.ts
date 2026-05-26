import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Game from '../models/Game'

type Product = {
  id: string
  price: number
}

type PurchaseResponse = {
  orderId: string
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expiry?: {
        month: number
        year: number
      }
      code?: string
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => '/destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => '/promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => '/em-breve'
    }),
    getAction: builder.query<Game[], void>({
      query: () => '/acao'
    }),
    getSports: builder.query<Game[], void>({
      query: () => '/esportes'
    }),
    getSimulation: builder.query<Game[], void>({
      query: () => '/simulacao'
    }),
    getFighting: builder.query<Game[], void>({
      query: () => '/luta'
    }),
    getRPG: builder.query<Game[], void>({
      query: () => '/rpg'
    }),
    getGameById: builder.query<Game, string>({
      query: (id) => `/jogos/${id}`
    }),
    purchaseGame: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightingQuery,
  useGetRPGQuery,
  useGetGameByIdQuery,
  usePurchaseGameMutation
} = api

export default api
