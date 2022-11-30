describe('First visit: Nothern Lights strain', () => {
    it('Gets to Nothern Lights ', () => {
        cy.visit('https://grp12.servecounterstrike.com/strains/1')
    })
})

describe('singgle strain page', () => {
    it('Checks if all elements are there', () => {
        cy.contains('Nothern Lights')
        cy.contains('User Rating')
        cy.contains('About')
        cy.contains('Medical Benefits')
        cy.contains('Calming')
        cy.contains('Energizing')
    })
})


