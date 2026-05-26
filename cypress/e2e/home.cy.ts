const API = 'https://api-ebac.vercel.app/api/eplay'

describe('Home — renderização de conteúdo da API', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API}/destaque`, { fixture: 'game.json' }).as('getFeatured')
    cy.intercept('GET', `${API}/promocoes`, { fixture: 'games.json' }).as('getOnSale')
    cy.intercept('GET', `${API}/em-breve`, { fixture: 'games.json' }).as('getSoon')
  })

  it('renderiza o banner com jogo em destaque', () => {
    cy.visit('/')
    cy.wait(['@getFeatured', '@getOnSale', '@getSoon'])

    cy.contains('Destaque do dia').should('be.visible')
    cy.contains('Cypress Test Game').should('be.visible')
    cy.contains('Comprar Agora').should('be.visible')
  })

  it('link "Comprar Agora" aponta para a página do jogo', () => {
    cy.visit('/')
    cy.wait('@getFeatured')

    cy.contains('Comprar Agora').should('have.attr', 'href').and('include', '/product/1')
  })

  it('renderiza a seção de promoções com jogos da API', () => {
    cy.visit('/')
    cy.wait(['@getOnSale', '@getSoon'])

    cy.contains('Promoções').should('be.visible')
    cy.contains('Game Alpha').should('be.visible')
    cy.contains('Game Beta').should('be.visible')
  })

  it('renderiza a seção "Em breve" com jogos da API', () => {
    cy.visit('/')
    cy.wait('@getSoon')

    cy.contains('Em breve').should('be.visible')

    cy.get('#soon').within(() => {
      cy.contains('Game Alpha').should('be.visible')
    })
  })

  it('cards de promoção têm link para a página do produto', () => {
    cy.visit('/')
    cy.wait('@getOnSale')

    cy.get('#on-sale').within(() => {
      cy.get('a[href="/product/10"]').should('exist')
      cy.get('a[href="/product/11"]').should('exist')
    })
  })

  it('exibe os preços e desconto nos cards de promoção', () => {
    cy.visit('/')
    cy.wait('@getOnSale')

    cy.get('#on-sale').within(() => {
      cy.contains('-30%').should('be.visible')
    })
  })
})
