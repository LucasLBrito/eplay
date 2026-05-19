import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Game from '../models/Game'
import { get } from 'http'

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
  useGetGameByIdQuery
} = api

export default api
