import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from '../../store/reducers/shoppingCart'
import { Game } from '../../models/Game'
import Checkout from './index'

const mockPurchaseGame = jest.fn()

const mockMutationState = {
  isLoading: false,
  error: null,
  isSuccess: false,
  data: undefined as { orderId: string } | undefined
}

jest.mock('../../services/api', () => ({
  usePurchaseGameMutation: () => [mockPurchaseGame, mockMutationState]
}))

const fakeGame: Game = {
  id: 1,
  name: 'Fake Game',
  description: 'Desc',
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
  }
}

const createStore = (withItem = true) =>
  configureStore({
    reducer: { Cart: shoppingCartReducer },
    preloadedState: {
      Cart: { items: withItem ? [fakeGame] : [], isOpen: false }
    }
  })

const renderCheckout = (withItem = true) =>
  render(
    <Provider store={createStore(withItem)}>
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    </Provider>
  )

beforeEach(() => {
  mockMutationState.isLoading = false
  mockMutationState.error = null
  mockMutationState.isSuccess = false
  mockMutationState.data = undefined
  mockPurchaseGame.mockClear()
})

describe('Checkout — renderização inicial', () => {
  it('renderiza os campos do formulário de cliente', () => {
    renderCheckout()
    expect(screen.getByLabelText('Nome completo')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('CPF')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail de entrega')).toBeInTheDocument()
  })

  it('mostra texto sobre boleto por padrão', () => {
    renderCheckout()
    expect(
      screen.getByText(/confirmação pode levar até 3 dias úteis/i)
    ).toBeInTheDocument()
  })
})

describe('Checkout — seleção de método de pagamento', () => {
  it('exibe campos de cartão ao clicar em Cartão de Crédito', async () => {
    renderCheckout()
    await act(async () => {
      await userEvent.click(screen.getByText('Cartão de Crédito'))
    })
    expect(screen.getByLabelText('Nome do titular do cartão')).toBeInTheDocument()
    expect(screen.getByLabelText('Número do cartão')).toBeInTheDocument()
    expect(screen.getByLabelText('CVV')).toBeInTheDocument()
  })

  it('oculta campos de cartão ao voltar para Boleto', async () => {
    renderCheckout()
    await act(async () => {
      await userEvent.click(screen.getByText('Cartão de Crédito'))
    })
    await act(async () => {
      await userEvent.click(screen.getByText('Boleto bancário'))
    })
    expect(screen.queryByLabelText('Número do cartão')).not.toBeInTheDocument()
    expect(
      screen.getByText(/confirmação pode levar até 3 dias úteis/i)
    ).toBeInTheDocument()
  })
})

describe('Checkout — validações do formulário', () => {
  it('mostra erros de validação ao tentar submeter vazio', async () => {
    renderCheckout()
    await userEvent.click(screen.getByText('Finalizar compra'))
    await waitFor(() => {
      expect(
        screen.getByText('O nome completo é obrigatório')
      ).toBeInTheDocument()
      expect(screen.getByText('O e-mail é obrigatório')).toBeInTheDocument()
      expect(screen.getByText('O CPF é obrigatório')).toBeInTheDocument()
    })
  })

  it('mostra erro quando os e-mails de entrega não coincidem', async () => {
    renderCheckout()
    fireEvent.change(screen.getByLabelText('E-mail de entrega'), {
      target: { value: 'a@a.com' }
    })
    fireEvent.change(screen.getByLabelText('Confirme o seu E-mail'), {
      target: { value: 'b@b.com' }
    })
    fireEvent.blur(screen.getByLabelText('Confirme o seu E-mail'))
    await waitFor(() => {
      expect(screen.getByText('Os e-mails não coincidem')).toBeInTheDocument()
    })
  })
})

describe('Checkout — submissão', () => {
  const fillValidForm = async () => {
    fireEvent.change(screen.getByLabelText('Nome completo'), {
      target: { value: 'Usuario Teste' }
    })
    fireEvent.change(screen.getByLabelText('E-mail'), {
      target: { value: 'teste@email.com' }
    })
    fireEvent.change(screen.getByLabelText('CPF'), {
      target: { value: '123.456.789-00' }
    })
    fireEvent.change(screen.getByLabelText('E-mail de entrega'), {
      target: { value: 'entrega@email.com' }
    })
    fireEvent.change(screen.getByLabelText('Confirme o seu E-mail'), {
      target: { value: 'entrega@email.com' }
    })
  }

  it('chama purchaseGame com payload correto no modo boleto', async () => {
    renderCheckout()
    await fillValidForm()
    await userEvent.click(screen.getByText('Finalizar compra'))
    await waitFor(() => {
      expect(mockPurchaseGame).toHaveBeenCalledWith(
        expect.objectContaining({
          products: [{ id: '1', price: 139.99 }],
          billing: {
            name: 'Usuario Teste',
            email: 'teste@email.com',
            document: '123.456.789-00'
          },
          delivery: { email: 'entrega@email.com' },
          payment: expect.objectContaining({ card: { active: false } })
        })
      )
    })
  })

  it('exibe tela de sucesso com número do pedido', () => {
    mockMutationState.isSuccess = true
    mockMutationState.data = { orderId: '#12345' }
    renderCheckout()
    expect(
      screen.getByText('Muito obrigado pela sua compra!')
    ).toBeInTheDocument()
    expect(screen.getByText(/#12345/)).toBeInTheDocument()
  })

  it('exibe mensagem de erro quando a API falha', () => {
    mockMutationState.error = true as unknown as null
    renderCheckout()
    expect(
      screen.getByText(/Ocorreu um erro ao finalizar a compra/i)
    ).toBeInTheDocument()
  })

  it('desabilita o botão e altera texto enquanto carrega', () => {
    mockMutationState.isLoading = true
    renderCheckout()
    const btn = screen.getByRole('button', { name: /finalizando compra/i })
    expect(btn).toBeDisabled()
  })
})
