/// <reference types="cypress" />
describe("Bebbia Checkout", () =>{
    it('Test Bebbia Checkout', () =>{
        cy.visit('https://qa.bebbia.digital/');
        cy.wait(500);
        cy.get('.container > :nth-child(3) > a > .text-18').click();
        cy.get('.right-0 > .SliderArrow_sliderArrow__soxqW > [style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img').click();
        cy.get('.swiper-slide-active > [data-testid="productCard"] > div.mt-5 > a > .text-18').click();
        cy.get('.Input_input__RCTjJ').type(53100);
        cy.get('form > .text-18').click();
        cy.get('div.mt-10 > .text-18').click();
        cy.get(':nth-child(3) > .relative > .Input_input__RCTjJ').type("bebbiacypress@gmail.com");
        cy.get(':nth-child(4) > .relative > .Input_input__RCTjJ').type("Bebbia@123");
        cy.get(':nth-child(5) > .relative > .Input_input__RCTjJ').type("Bebbia@123");
        cy.get('.text-13 > .opacity-0').check();
        cy.get('.text-18').click();
        cy.wait(7000);
        cy.get(':nth-child(2) > .relative > .Input_input__RCTjJ').type("Evelio");
        cy.get(':nth-child(3) > .relative > .Input_input__RCTjJ').type("Cypress");
     //   cy.get('#headlessui-listbox-button-\:r1\:').select({force: true});

     // cy.get('#day').select("6");
     // cy.get('#month').select("April");
     // cy.get('#year').select(73);
       
        cy.get(':nth-child(5) > .relative > .Input_input__RCTjJ').type(1112111111);
        cy.get('.text-18').click();
        cy.wait(7000);
        cy.get('#headlessui-listbox-button-\:r9\:').select({force: true});
        cy.get('[value= "Ciudad Satélite"]').select();


    });
});

    
