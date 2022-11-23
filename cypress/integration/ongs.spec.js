/// <reference types='cypress'/>


describe ('ongs', () => {
    it('devem poder realizar cadastro', ()=>{
        
        cy.visit('http://localhost:3000/register')
        // cy.get - buscar um elemeto
        // .type - insere um texto
        cy.get('[placeholder="Digite seu nome"]').type('Dogs queridos - Teste QA')
        cy.get('[placeholder="Digite seu CPF"]').type('78137583661')
        cy.get('[placeholder="(__)____-____"]').type('71999999999')
        cy.get('[placeholder="Digite o código de indicação"]').type('PATRICIA4405')
        
        cy.get('[class="d-flex justify-content-center align-items-center checkbox"]').click()      
        cy.get('.btn').click()

        //cy.get('input.form-control').type('2345')
        cy.get('input.form-control').should('2345')
        
        //.pause(200)
       
        //routing
        // start server com cy.server()
        // atribuir trota a um alias
        // esperar com cy.wait
        
        
    });


    it('informar código PIN', ()=>{
       //cy.visit('http://localhost:3000/register/pincode')
        
      // cy.get('[class="form-control"]').type ('2345')
       //cy.get('.buton').click()
        //.pause(8000)

    });

    it('deve poder realizar cadastro de login no sistema', ()=>{

    });

});

//./node_modules/.bin/cypress open
