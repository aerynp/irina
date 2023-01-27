/// <reference types="cypress" />    

import { GoogleSearch } from '../page_objects/google_search.page';



describe("Check user is able to search by specific option", () => {
    beforeEach(() => {
        cy.visit("https://www.google.com/")
        //cy.visit('/index.html', { timeout: 30000 })
       //cy.url().should('include', 'moldova')
        GoogleSearch.googleSearchField().should('exist');
    })

    it("Search by option", () => {
        cy.get('input')
        GoogleSearch.googleSearchResults().should('exist');
    })

    it("Search by random text", () =>{
        console.log("We are searching")
        cy.get('input[name="q"]').type("Moldova")
        setTimeout(()=> { cy.contains('input[name="btnK"]').click()}, 3000)
    })

})