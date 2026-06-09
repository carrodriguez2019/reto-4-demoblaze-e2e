class CartPage {
  productShouldBeVisible(productName) {
    cy.get('#tbodyid').should('contain.text', productName); //Valida que la tabla del carrito contenga el producto.
  }
}

module.exports = { CartPage };
