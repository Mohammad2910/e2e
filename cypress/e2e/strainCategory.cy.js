describe('First visit: Strains', () => {
    it('Gets to Strains page ', () => {
        cy.visit('https://grp12.servecounterstrike.com/strains')
    })
})

describe('CategoryStrains side grid', () => {
    it('Checks navigation options', () => {
        cy.contains('Indica')
        cy.contains('Sativa')
        cy.contains('Hybrid')
    })
})
describe('Individual strains in sidegrid', () => {
    it('Checks navigation options', () => {
        cy.contains('Nothern Lights')
        cy.contains('Purple Punch')
        cy.contains('Strawberry Cough')
        cy.contains('Super Lemon Haze')
    })
})


