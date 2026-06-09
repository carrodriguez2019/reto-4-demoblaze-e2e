const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { HomePage } = require('../../pages/HomePage');
const { LoginPage } = require('../../pages/LoginPage');
const { CartPage } = require('../../pages/CartPage');

const homePage = new HomePage();
const loginPage = new LoginPage();
const cartPage = new CartPage();

Given('que el usuario abre Demoblaze en Cypress', () => {
  homePage.open();
});

When('inicia sesion con usuario {string} y contrasena {string}', (username, password) => {
  loginPage.openLoginModal();
  loginPage.login(username, password);
});

Then('deberia visualizar el nombre del usuario en la barra superior', () => {
  loginPage.userNameShouldBeVisible('test');
});

When('agrega el producto {string} al carrito desde Cypress', (productName) => {
  cy.on('window:alert', message => {
    expect(message).to.contain('Product added');
  });

  homePage.addProductToCart(productName);
});

When('navega al carrito de compras', () => {
  homePage.goToCart();
});

Then('deberia visualizar el producto {string} en el carrito', (productName) => {
  cartPage.productShouldBeVisible(productName);
});
