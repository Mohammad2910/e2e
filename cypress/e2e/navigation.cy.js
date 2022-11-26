describe('First visit: homepage', () => {
  it('Gets to homepage', () => {
    cy.visit('https://grp12.servecounterstrike.com/home')
  })
})

describe('Homepage', () => {
  it('Checks navigation options', () => {
    cy.contains('Strains')
    cy.contains('Distributor')
    cy.contains('Profile')
  })
})

describe('Navigation', () => {
  it('Check if we went to the correct url', () => {

    cy.contains('Strains').click()
    cy.url().should('include', '/strains')

    cy.contains('Distributor').click()
    cy.url().should('include', '/distributor')

    // Implement user crud before making assertion on profile
  })
})

