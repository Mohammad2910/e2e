describe('Strain page', () => {
    it('should load', () => {
        cy.visit('https://grp12.servecounterstrike.com/strains')
    })

    it('should contain category sidegrid', () => {
        cy.get('.wrapper').should('have.text', 'IndicaNothern LightsPurple PunchSativaStrawberry CoughHybridSuper Lemon Haze')
    })

    it('should contain strain cards', () => {
        cy.get('.row .MuiTypography-h5').should('have.text', 'IndicaSativaHybrid')
    })

    it('should have indica category specific cards', () => {
        cy.contains('Indica').click({force: true})
        cy.url().should('include', '/category/1')
        cy.get('.row .MuiTypography-h5').should('have.text', 'Nothern LightsPurple Punch')
    })

    it('should have sativa category specific cards', () => {
        cy.contains('Sativa').click({force: true})
        cy.url().should('include', '/category/2')
        cy.get('.row .MuiTypography-h5').should('have.text', 'Strawberry Cough')
    })

    it('should have hybrid category specific cards', () => {
        cy.contains('Hybrid').click({force: true})
        cy.url().should('include', '/category/3')
        cy.get('.row .MuiTypography-h5').should('have.text', 'Super Lemon Haze')
    })
})