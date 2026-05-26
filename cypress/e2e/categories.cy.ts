const API = 'https://api-ebac.vercel.app/api/eplay'

describe('Categories — renderização de conteúdo da API', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API}/acao`, { fixture: 'games.json' }).as('getAction')
    cy.intercept('GET', `${API}/esportes`, { fixture: 'games.json' }).as('getSports')
    cy.intercept('GET', `${API}/simulacao`, { fixture: 'games.json' }).as('getSimulation')
    cy.intercept('GET', `${API}/luta`, { fixture: 'games.json' }).as('getFighting')
    cy.intercept('GET', `${API}/rpg`, { fixture: 'games.json' }).as('getRPG')
  })

  it('renderiza todas as seções de categorias', () => {
    cy.visit('/categories')
    cy.wait(['@getAction', '@getSports', '@getSimulation', '@getFighting', '@getRPG'])

    cy.contains('Ação').should('be.visible')
    cy.contains('Esportes').should('be.visible')
    cy.contains('Simulação').should('be.visible')
    cy.contains('Luta').should('be.visible')
    cy.contains('RPG').should('be.visible')
  })

  it('renderiza jogos da API na seção Ação', () => {
    cy.visit('/categories')
    cy.wait('@getAction')

    cy.get('#action').within(() => {
      cy.contains('Game Alpha').should('be.visible')
      cy.contains('Game Beta').should('be.visible')
    })
  })

  it('renderiza jogos da API na seção Esportes', () => {
    cy.visit('/categories')
    cy.wait('@getSports')

    cy.get('#sports').within(() => {
      cy.contains('Game Alpha').should('be.visible')
    })
  })

  it('renderiza jogos da API na seção RPG', () => {
    cy.visit('/categories')
    cy.wait('@getRPG')

    cy.get('#rpg').within(() => {
      cy.contains('Game Alpha').should('be.visible')
    })
  })

  it('cards de jogos têm link correto para a página do produto', () => {
    cy.visit('/categories')
    cy.wait('@getAction')

    cy.get('#action').within(() => {
      cy.get('a[href="/product/10"]').should('exist')
      cy.get('a[href="/product/11"]').should('exist')
    })
  })

  it('exibe tags de categoria e plataforma nos cards', () => {
    cy.visit('/categories')
    cy.wait('@getAction')

    cy.get('#action').within(() => {
      cy.contains('Ação').should('be.visible')
      cy.contains('PC').should('be.visible')
    })
  })
})
