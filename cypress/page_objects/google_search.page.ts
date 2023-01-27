export class GoogleSearch{
    static googleSearchField = () =>
        cy.get('input[name="q"]');
    

    static googleHeader = () => 
       null;
    

    static googleSearchResults = () =>  
        cy.get('div[id="res"]');
    
        
}
