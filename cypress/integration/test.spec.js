/// <reference types="cypress" />
const search = require('../page-objects/search')
const myAccount = require('../page-objects/myAccount')

beforeEach(function () {
    cy.visit('https://www.zoopla.co.uk/')
    cy.get(search.elements.acceptCookie).click()
})

describe('Register and update alerts', function () {
    it('Should be able to register for a rent alert', function () {
        cy.get(search.elements.headerMenu.toRent).click()
        cy.get(search.elements.searchModal.location).click({ force: true })
        cy.get(search.elements.searchModal.location).type(`London`)
        cy.get(search.elements.searchModal.firstResult).click()
        cy.get(search.elements.searchModal.minPrice).select('800')
        cy.get(search.elements.searchModal.maxPrice).select('1000')
        cy.get(search.elements.searchModal.bedrooms).select('1')
        cy.get(search.elements.searchModal.search).click()
        cy.login()
        cy.get(myAccount.elements.alertsAndSearches.alertFrequency).select("3")
    })
})

describe('Search results', function () {
    it('Search for a particular property in the house prices search and confirm that it appears as the first result', function () {
        cy.get(search.elements.headerMenu.housePrices).click()
        cy.get(search.elements.searchModal.location).click({ force: true })
        cy.get(search.elements.searchModal.location).type('4 Becontree Avenue')
        cy.get(search.elements.searchModal.firstResult).click()
        cy.get(search.elements.searchModal.searchSubmit).click()
        cy.get(search.elements.searchResultsCards).eq('0').should('contain.text', `4 Becontree Avenue`)
    })

    it('Save a search for property within 15 minutes drive of SE1 2LH.', function () {
        cy.get(search.elements.headerMenu.toRentTravelTime).click({ force: true })
        cy.get(search.elements.searchModal.location).type('SE1 2LH')
        cy.get(search.elements.searchModal.duration).select('900')
        cy.get(search.elements.searchModal.transport).select('driving')
        cy.get(search.elements.searchModal.searchSubmit).click()
        cy.get(search.elements.saveSearch).click()
        cy.get(search.elements.signIn).click()
        cy.login()
        cy.get(search.elements.searchModal.search).click()
        cy.get(myAccount.elements.alertsAndSearches.alertUpdateSuccessful).should('be.visible')
    })
})

describe('Saved search results', function () {
    it('Check that saved searches can be retrieved', function () {
        cy.get(search.elements.headerMenu.signIn).click()
        cy.login()
        cy.get(search.elements.headerMenu.myZooplaAlertSearch).click({ force: true })
        cy.get(myAccount.elements.alertsAndSearches.alertView).click()
        cy.get(search.elements.searchResultCount).should('contain.text', `results`)
    })
})
