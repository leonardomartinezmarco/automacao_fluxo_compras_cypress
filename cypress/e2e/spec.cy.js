import '../support/index'
describe('Teste de Fluxo de Compra', () => {
  it.only('Fluxo de Compra', () => {
    // visita o site
    cy.visit('https://otel-demo.field-eng.grafana.net/');

    //ir para loja
    cy.get('.sc-997da79c-0').click();
    //validar nome da página de produtos
    cy.contains('Hot Products');

    //selecionar produto 1
    cy.get(':nth-child(1) > .sc-9addc9c-1').should('be.visible').click();
    //adicionar produto ao carrinho
    cy.get('[data-cy="product-add-to-cart"]').click();
    // retornar para loja
    cy.get('#__next > main > div > div > form > div.sc-c1c4d8-4.fDnjKW > button.sc-997da79c-0.sc-c1c4d8-5.datfUC.kmalLd').should('be.visible').click();

    //selecionar produto 2
    cy.get(':nth-child(2) > .sc-9addc9c-1').click();
    //alterar quantidade produto
    cy.get('[data-cy="product-quantity"]').select('2');
    //adicionar produto ao carrinho
    cy.get('[data-cy="product-add-to-cart"]').click();
    // retornar para loja
    cy.get('#__next > main > div > div > form > div.sc-c1c4d8-4.fDnjKW > button.sc-997da79c-0.sc-c1c4d8-5.datfUC.kmalLd').should('be.visible').click();

    //selecionar produto 3
    cy.get(':nth-child(3) > .sc-9addc9c-1').click();
    //alterar quantidade produto
    cy.get('[data-cy="product-quantity"]').select('3');
    //adicionar produto ao carrinho
    cy.get('[data-cy="product-add-to-cart"]').click();

    //validar nome da página de produtos
    cy.contains('Shopping Cart');
    //trocar moeda
    cy.get('[data-cy="currency-switcher"]').select('BRL');

    //validar valor do carrinho
    cy.get(':nth-child(6) > :nth-child(2) > [data-cy="product-price"]').contains('2398.42');

    //limpar e trocar e-mail
    cy.get('#email').clear().type('carolinelopespaier@gmail.com');
    //limpar e trocar enderço
    cy.get('#street_address').clear().type('Estrada Fazenda Conceição, 272');
    //limpar e trocar cep
    cy.get('#zip_code').clear().type('94244000');
    //limpar e trocar cidade
    cy.get('#city').clear().type('Gravataí');
    //limpar e trocar estado
    cy.get('#state').clear().type('RS');
    //limpar e trocar país
    cy.get('#country').clear().type('Brasil');

    //finalizar compra
    cy.get('[data-cy="checkout-place-order"]').click();
    //validar mensagem de confirmação da compra
    cy.contains('Your order is complete!');

    //validar produtos comprados
    cy.get(':nth-child(1) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > .sc-d01ad42c-3').contains('National Park Foundation Explorascope');
    cy.get(':nth-child(1) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > :nth-child(2)').contains('1');
    cy.get(':nth-child(1) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > :nth-child(3)').contains('384.95');

    cy.get(':nth-child(2) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > .sc-d01ad42c-3').contains('Starsense Explorer Refractor Telescope');
    cy.get(':nth-child(2) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > :nth-child(2)').contains('2');
    cy.get(':nth-child(2) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > :nth-child(3) > [data-cy="product-price"]').contains('1321.24');

    cy.get(':nth-child(3) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > .sc-d01ad42c-3').contains('Eclipsmart Travel Refractor Telescope');
    cy.get(':nth-child(3) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > :nth-child(2)').contains('3');
    cy.get(':nth-child(3) > .sc-d01ad42c-1 > .sc-d01ad42c-2 > :nth-child(3)').contains('490.63');
  });
});