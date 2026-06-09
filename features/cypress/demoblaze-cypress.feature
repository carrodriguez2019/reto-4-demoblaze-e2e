Feature: Flujos principales en Demoblaze con Cypress

    Scenario: Iniciar sesion con usuario valido
        Given que el usuario abre Demoblaze en Cypress
        When inicia sesion con usuario "test" y contrasena "test"
        Then deberia visualizar el nombre del usuario en la barra superior
    
    Scenario: Validar producto agregado en el carrito
        Given que el usuario abre Demoblaze en Cypress
        When agrega el producto "Nokia lumia 1520" al carrito desde Cypress
        And navega al carrito de compras
        Then deberia visualizar el producto "Nokia lumia 1520" en el carrito
