# Reto 4 - Automatizacion E2E sobre Demoblaze

Este proyecto implementa una estrategia de automatizacion End to End sobre la pagina:

https://www.demoblaze.com/index.html

El objetivo es validar flujos funcionales principales usando escenarios BDD en Gherkin, modelo Page Object Model (POM), dos herramientas de automatizacion diferentes y ejecucion continua mediante Jenkins.

## Herramientas Usadas

- Playwright
- Cypress
- Cucumber / Gherkin
- Jenkins
- Node.js / npm

## Alcance Automatizado

Se automatizaron 4 escenarios BDD en total:

- 2 escenarios con Playwright.
- 2 escenarios con Cypress.

Los flujos cubiertos son:

- Navegacion por categorias.
- Visualizacion de productos.
- Agregar productos al carrito.
- Login de usuario.
- Validacion de productos en carrito.
- Validacion de mensajes del sistema.

## Escenarios BDD

### Playwright

Archivo:

```text
features/playwright/demoblaze-playwright.feature
```

Escenarios:

```gherkin
Scenario: Navegar por la categoria Phones
  Given que el usuario abre la pagina principal de Demoblaze
  When selecciona la categoria "Phones"
  Then deberia visualizar productos de la categoria seleccionada

Scenario: Agregar un producto al carrito
  Given que el usuario abre la pagina principal de Demoblaze
  When selecciona el producto "Samsung galaxy s6"
  And agrega el producto al carrito
  Then deberia visualizar el mensaje de producto agregado
```

### Cypress

Archivo:

```text
features/cypress/demoblaze-cypress.feature
```

Escenarios:

```gherkin
Scenario: Iniciar sesion con usuario valido
  Given que el usuario abre Demoblaze en Cypress
  When inicia sesion con usuario "test" y contrasena "test"
  Then deberia visualizar el nombre del usuario en la barra superior

Scenario: Validar producto agregado en el carrito
  Given que el usuario abre Demoblaze en Cypress
  When agrega el producto "Nokia lumia 1520" al carrito desde Cypress
  And navega al carrito de compras
  Then deberia visualizar el producto "Nokia lumia 1520" en el carrito
```

## Modelo POM

El proyecto usa Page Object Model para separar:

- La descripcion del comportamiento en Gherkin.
- La traduccion de los pasos en archivos `steps`.
- Las acciones concretas sobre la pagina en clases `pages`.

Esto permite que los escenarios sean mas legibles y que los selectores de la pagina esten centralizados.

Estructura principal:

```text
features/
  playwright/
  cypress/

playwright/
  pages/
  steps/
  support/

cypress/
  pages/
  cypress/steps/
```

Ejemplo de POM:

```js
class HomePage {
  open() {
    cy.visit('https://www.demoblaze.com/index.html');
  }

  selectProduct(productName) {
    cy.contains('.card-title a', productName).click();
  }
}
```

## Instalacion

Desde la raiz del proyecto ejecutar:

```powershell
npm install
```

Instalar navegadores de Playwright:

```powershell
npx playwright install
```

## Ejecucion De Pruebas

Ejecutar pruebas Playwright:

```powershell
npm run test:playwright
```

Ejecutar pruebas Cypress:

```powershell
npm run test:cypress
```

Ejecutar toda la suite E2E:

```powershell
npm run test:e2e
```

## Evidencias

El proyecto genera evidencias automaticas:

```text
reports/playwright-report.html
reports/cypress-report.html
reports/cypress-report.json
reports/cypress-videos/
screenshots/
```

Playwright:

- Genera reporte HTML.
- Toma screenshot automaticamente cuando falla un paso.

Cypress:

- Genera reporte HTML.
- Genera reporte JSON.
- Graba video de ejecucion.
- Genera screenshots cuando falla una prueba.

## Jenkins

El archivo `Jenkinsfile` contiene un pipeline con stages para ejecutar automaticamente las pruebas.

Stages principales:

```text
Instalar dependencias
Ejecutar pruebas Playwright
Ejecutar pruebas Cypress
```

Al finalizar, Jenkins archiva las evidencias ubicadas en:

```text
reports/**/*
screenshots/**/*
```

## Resultado Actual

Ejecucion Playwright:

```text
2 scenarios passed
7 steps passed
```

Ejecucion Cypress:

```text
2 tests passed
0 failing
```

Resultado total:

```text
4 escenarios automatizados
4 escenarios ejecutados exitosamente
```

## Notas

- Las advertencias de npm sobre paquetes `deprecated` no impiden la ejecucion de las pruebas.
- No se recomienda ejecutar `npm audit fix --force` durante el reto porque puede actualizar dependencias con cambios rompientes.
- Si algun escenario falla, revisar primero las evidencias generadas en `screenshots/` y `reports/`.
