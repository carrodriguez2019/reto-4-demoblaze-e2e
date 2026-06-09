Feature: Validaciones principales en Demoblaze con Playwright

    Scenario: Navegar por la categoria Phones
        Given que el usuario abre la pagina principal de Demoblaze
        When selecciona la categoria "Phones"
        Then deberia visualizar productos de la categoria seleccionada
    
    Scenario: Agregar un producto al carrito
        Given que el usuario abre la pagina principal de Demoblaze
        When selecciona el producto "Samsung galaxy s6"
        And agrega el producto al carrito
        Then deberia visualizar el mensaje de producto agregado