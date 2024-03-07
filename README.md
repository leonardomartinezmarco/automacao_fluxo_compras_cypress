# Teste de Fluxo de Compra

Este é um teste automatizado que simula o fluxo de compras no site OpenTelemetry demo, um site de comércio eletrônico. 
O teste foi implementado utilizando o framework de teste Cypress em JavaScript.

<a href="https://otel-demo.field-eng.grafana.net/" target="_blank">Visite o site:</a>


---
### Objetivo do Teste
O objetivo deste teste é verificar se o fluxo de compra no site é executado corretamente, desde a seleção de produtos até a conclusão da compra, incluindo a validação dos itens no carrinho e a confirmação da ordem.

---
### Pré-requisitos

- Ter o Node.js instalado: <a href="https://nodejs.org/en/download" target="_blank">Download</a>

- Certifique-se de ter o Cypress instalado. Você pode instalá-lo usando o seguinte comando:

``` npm install cypress --save-dev ```

---
### Como Executar o Teste

1. Clone este repositório.

2. Abra o terminal na raiz do projeto.

3. Execute o comando:

``` npx cypress open ```

---
Isso executará o teste automaticamente no navegador escolhido.

---
### Passos executados no teste:
- Adicionar produtos em diferentes quantidades;
- Troca moeda;
- Validação valores;
- Preenchimento formulário;
- Finalização compra;
- Validação de produtos comprados.
