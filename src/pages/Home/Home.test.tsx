import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Game } from '../../models/Game'
import Home from './index'

const makeGame = (overrides: Partial<Game> = {}): Game => ({
  id: 1,
  name: 'Featured Game',
  description: 'Descrição do jogo em destaque.',
  prices: { old: 199.99, discount: 30, current: 139.99 },
  details: {
    category: 'Ação',
    system: 'PC',
    developer: 'Dev',
    publisher: 'Pub',
    languages: ['Inglês']
  },
  media: {
    thumbnail: 'https://placehold.co/150',
    cover: 'https://placehold.co/800x400',
    gallery: []
  },
  ...overrides
})

const featuredGame = makeGame({ id: 1, name: 'Featured Game' })
const promoGame = makeGame({ id: 2, name: 'Promo Game' })
const soonGame = makeGame({ id: 3, name: 'Soon Game' })

const mockApi = {
  featured: { data: featuredGame as Game | undefined },
  onSale: { data: [promoGame] as Game[] | undefined },
  soon: { data: [soonGame] as Game[] | undefined }
}

jest.mock('../../services/api', () => ({
  useGetFeaturedGameQuery: () => mockApi.featured,
  useGetOnSaleQuery: () => mockApi.onSale,
  useGetSoonQuery: () => mockApi.soon
}))

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

beforeEach(() => {
  mockApi.featured = { data: featuredGame }
  mockApi.onSale = { data: [promoGame] }
  mockApi.soon = { data: [soonGame] }
})

describe('Home — estado de loading', () => {
  it('exibe o spinner de loading quando os dados ainda não chegaram', () => {
    mockApi.onSale = { data: undefined }
    renderHome()
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})

describe('Home — Banner de destaque', () => {
  it('renderiza a tag "Destaque do dia"', () => {
    renderHome()
    expect(screen.getByText('Destaque do dia')).toBeInTheDocument()
  })

  it('renderiza o nome do jogo em destaque', () => {
    renderHome()
    expect(screen.getByText('Featured Game')).toBeInTheDocument()
  })

  it('renderiza o link "Comprar Agora" apontando para /product/1', () => {
    renderHome()
    const link = screen.getByRole('link', { name: /comprar agora/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/product/1')
  })

  it('exibe loading no banner quando o jogo em destaque não está pronto', () => {
    mockApi.featured = { data: undefined }
    renderHome()
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
})

describe('Home — Seção Promoções', () => {
  it('renderiza o título "Promoções"', () => {
    renderHome()
    expect(screen.getByText('Promoções')).toBeInTheDocument()
  })

  it('renderiza o card do jogo em promoção', () => {
    renderHome()
    expect(screen.getByText('Promo Game')).toBeInTheDocument()
  })

  it('card de promoção tem link para a página do produto', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /promo game/i })).toHaveAttribute(
      'href',
      '/product/2'
    )
  })

  it('exibe a tag de desconto no card', () => {
    renderHome()
    expect(screen.getAllByText('-30%')[0]).toBeInTheDocument()
  })
})

describe('Home — Seção Em breve', () => {
  it('renderiza o título "Em breve"', () => {
    renderHome()
    expect(screen.getByText('Em breve')).toBeInTheDocument()
  })

  it('renderiza o card do jogo em breve', () => {
    renderHome()
    expect(screen.getByText('Soon Game')).toBeInTheDocument()
  })

  it('card "em breve" tem link para a página do produto', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /soon game/i })).toHaveAttribute(
      'href',
      '/product/3'
    )
  })
})
