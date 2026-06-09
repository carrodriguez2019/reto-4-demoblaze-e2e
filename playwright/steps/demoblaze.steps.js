const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');

Given('que el usuario abre la pagina principal de Demoblaze', async function () {
  this.homePage = new HomePage(this.page); //crea una HomePage usando la pestaña actual
  await this.homePage.open(); // abre Demoblaze.
});

When('selecciona la categoria {string}', async function (categoryName) {
  await this.homePage.selectCategory(categoryName);
});

Then('deberia visualizar productos de la categoria seleccionada', async function () {
  await expect(this.page.getByRole('link', { name: 'Samsung galaxy s6' })).toBeVisible();
});

When('selecciona el producto {string}', async function (productName) {
  await this.homePage.selectProduct(productName);
});

When('agrega el producto al carrito', async function () {
  this.productPage = new ProductPage(this.page);
  const dialogPromise = this.page.waitForEvent('dialog');
  await this.productPage.addToCart();
  const dialog = await dialogPromise;
  this.addToCartMessage = dialog.message();
  await dialog.accept();
});

Then('deberia visualizar el mensaje de producto agregado', async function () {
  expect(this.addToCartMessage).toContain('Product added');
});
