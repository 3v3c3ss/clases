describe("Xpath", () =>{
    
    it('Xpath absoluto encontrando el botón registrer', () =>{
    cy.visit('');
    cy.xpath('html/body/div/div/div/div/form/button');

    });

    it('Xpath absoluto encontrando el botón registrer', () =>{
        cy.visit('');
        cy.xpath("//button[@id='submitForm']");
        
    });

    it('Xpath relativo encontrando el botón registrer', () =>{
        cy.visit('');
        cy.xpath("//button[@id='submitForm']");
        
    });

    it('Xpath relativo utilizando metodo contains', () =>{
        cy.visit('');
        cy.xpath("//input[contains(@id,'us')]");
        
    });
    
    it('Xpath relativo utilizando metodo starts-with', () =>{
        cy.visit('');
        cy.xpath("//input[starts-with(@id,'us')]");
        
    });

    it('Xpath relativo el metodo text', () =>{
        cy.visit('');
        cy.xpath("//button[text()='Register']");
        
    });

    it('Xpath relativo utilizando metodo descendant', () =>{
        cy.visit('');
        cy.xpath("//fieldset//descendant::input[@value='Male']");
        
    });

    
    it('Xpath relativo utilizando metodo ancestor', () =>{
        cy.visit('');
        cy.xpath("//input[@value='Male']//ancestor::fieldset");
        
    });

    
    it('Xpath relativo utilizando metodo child', () =>{
        cy.visit('');
        cy.xpath("//label//child::input[@value='Male']");
        
    });

    
    it('Xpath relativo utilizando metodo parent', () =>{
        cy.visit('');
        cy.xpath("//input[@value='Male']//parent::label");
        
    });

    
    it('Xpath relativo utilizando metodo following-sibling', () =>{
        cy.visit('');
        cy.xpath("//label//following-sibling::input[@id='user']");
        
    });
  

    it('Xpath relativo utilizando metodo preceding-sibling', () =>{
        cy.visit('');
        cy.xpath("//input[@id='user']//preceding-sibling::label");
        
    });
  
  
  




  
  
});