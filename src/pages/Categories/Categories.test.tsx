import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Game } from '../../models/Game'
import Categories from './index'

const makeGame = (id: number, name: string): Game => ({
  id,
  name,
  description: `Descrição de ${name}`,
  prices: { current: 99.99 },
  details: {
    category: 'Teste',
    system: 'PC',
    developer: 'Dev',
    publisher: 'Pub',
    languages: ['Inglês']
  },
  media: {
    thumbnail: 'https://placehold.co/150',
    cover: 'https://placehold.co/800x400',
    gallery: []
  }
})

const acaoGame = makeGame(10, 'Jogo de Ação')
const esportesGame = makeGame(11, 'Jogo de Esportes')
const simulacaoGame = makeGame(12, 'Jogo de Simulação')
const lutaGame = makeGame(13, 'Jogo de Luta')
const rpgGame = makeGame(14, 'Jogo de RPG')

const mockApi = {
  acao: { data: [acaoGame] as Game[] | undefined },
  esportes: { data: [esportesGame] as Game[] | undefined },
  simulacao: { data: [simulacaoGame] as Game[] | undefined },
  luta: { data: [lutaGame] as Game[] | undefined },
  rpg: { data: [rpgGame] as Game[] | undefined }
}

jest.mock('../../services/api', () => ({
  useGetActionQuery: () => mockApi.acao,
  useGetSportsQuery: () => mockApi.esportes,
  useGetSimulationQuery: () => mockApi.simulacao,
  useGetFightingQuery: () => mockApi.luta,
  useGetRPGQuery: () => mockApi.rpg
}))

const renderCategories = () =>
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>
  )

beforeEach(() => {
  mockApi.acao = { data: [acaoGame] }
  mockApi.esportes = { data: [esportesGame] }
  mockApi.simulacao = { data: [simulacaoGame] }
  mockApi.luta = { data: [lutaGame] }
  mockApi.rpg = { data: [rpgGame] }
})

describe('Categories — estado de loading', () => {
  it('exibe o spinner de loading quando alguma categoria não está pronta', () => {
    mockApi.rpg = { data: undefined }
    renderCategories()
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})

describe('Categories — títulos das seções', () => {
  it('renderiza a seção Ação', () => {
    renderCategories()
    expect(screen.getByText('Ação')).toBeInTheDocument()
  })

  it('renderiza a seção Esportes', () => {
    renderCategories()
    expect(screen.getByText('Esportes')).toBeInTheDocument()
  })

  it('renderiza a seção Simulação', () => {
    renderCategories()
    expect(screen.getByText('Simulação')).toBeInTheDocument()
  })

  it('renderiza a seção Luta', () => {
    renderCategories()
    expect(screen.getByText('Luta')).toBeInTheDocument()
  })

  it('renderiza a seção RPG', () => {
    renderCategories()
    expect(screen.getByText('RPG')).toBeInTheDocument()
  })
})

describe('Categories — cards de jogos', () => {
  it('renderiza jogo da categoria Ação', () => {
    renderCategories()
    expect(screen.getByText('Jogo de Ação')).toBeInTheDocument()
  })

  it('renderiza jogo da categoria Esportes', () => {
    renderCategories()
    expect(screen.getByText('Jogo de Esportes')).toBeInTheDocument()
  })

  it('renderiza jogo da categoria Simulação', () => {
    renderCategories()
    expect(screen.getByText('Jogo de Simulação')).toBeInTheDocument()
  })

  it('renderiza jogo da categoria Luta', () => {
    renderCategories()
    expect(screen.getByText('Jogo de Luta')).toBeInTheDocument()
  })

  it('renderiza jogo da categoria RPG', () => {
    renderCategories()
    expect(screen.getByText('Jogo de RPG')).toBeInTheDocument()
  })

  it('cards têm links corretos para as páginas dos produtos', () => {
    renderCategories()
    expect(screen.getByRole('link', { name: /jogo de ação/i })).toHaveAttribute(
      'href',
      '/product/10'
    )
    expect(screen.getByRole('link', { name: /jogo de rpg/i })).toHaveAttribute(
      'href',
      '/product/14'
    )
  })
})
