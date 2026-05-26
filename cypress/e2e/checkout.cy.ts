const API = 'https://api-ebac.vercel.app/api/eplay'

const fillCustomerData = () => {
  cy.get('#fullname').type('Usuario Teste')
  cy.get('#email').type('teste@email.com')
  cy.get('#cpf').type('123.456.789-00')
  cy.get('#Deliveryemail').type('entrega@email.com')
  cy.get('#CheckEmail').type('entrega@email.com')
}

describe('Fluxo de compra — Checkout', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API}/jogos/1`, { fixture: 'game.json' }).as('getGame')
    cy.intercept('POST', `${API}/checkout`, { orderId: '#12345' }).as('postCheckout')
  })

  it('realiza compra completa com boleto bancário', () => {
    cy.visit('/product/1')
    cy.wait('@getGame')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Continuar com a Comprar').click()

    cy.url().should('include', '/checkout')

    fillCustomerData()

    cy.contains('Finalizar compra').click()

    cy.wait('@postCheckout').then((interception) => {
      const body = interception.request.body
      expect(body.products).to.deep.equal([{ id: '1', price: 139.99 }])
      expect(body.billing.name).to.equal('Usuario Teste')
      expect(body.billing.email).to.equal('teste@email.com')
      expect(body.billing.document).to.equal('123.456.789-00')
      expect(body.delivery.email).to.equal('entrega@email.com')
      expect(body.payment.card.active).to.equal(false)
      expect(body.payment.installments).to.equal(1)
    })

    cy.contains('Muito obrigado pela sua compra!').should('be.visible')
    cy.contains('#12345').should('be.visible')
    cy.contains('Boleto Bancário').should('be.visible')
  })

  it('realiza compra completa com cartão de crédito', () => {
    cy.visit('/product/1')
    cy.wait('@getGame')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Continuar com a Comprar').click()

    cy.url().should('include', '/checkout')

    fillCustomerData()

    cy.contains('Cartão de Crédito').click()

    cy.get('#CardOweer').type('Titular Teste')
    cy.get('#CarDcpf').type('123.456.789-00')
    cy.get('#NameCard').type('TITULAR TESTE')
    cy.get('#CardNumber').type('1234 5678 9012 3456')
    cy.get('#month').type('12')
    cy.get('#year').type('2027')
    cy.get('#CVV').type('123')

    cy.contains('Finalizar compra').click()

    cy.wait('@postCheckout').then((interception) => {
      const body = interception.request.body
      expect(body.products).to.deep.equal([{ id: '1', price: 139.99 }])
      expect(body.payment.card.active).to.equal(true)
      expect(body.payment.card.owner.name).to.equal('Titular Teste')
      expect(body.payment.card.number).to.equal('1234 5678 9012 3456')
      expect(body.payment.card.expiry).to.deep.equal({ month: 12, year: 2027 })
      expect(body.payment.card.code).to.equal('123')
    })

    cy.contains('Muito obrigado pela sua compra!').should('be.visible')
    cy.contains('#12345').should('be.visible')
    cy.contains('Cartão de Crédito').should('be.visible')
  })
})
