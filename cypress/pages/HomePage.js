class HomePage {
  open() {
    cy.visit('https://www.demoblaze.com/index.html'); //Abre Demoblaze.
  }

  selectProduct(productName) {
    cy.contains('.card-title a', productName).click(); //Busca un producto dentro de los links de tarjetas y hace clic.
  }

  addProductToCart(productName) {
    //Entra al producto, luego hace clic en Add to cart
    this.selectProduct(productName);
    cy.contains('a', 'Add to cart').click();
  }

  goToCart() {
    cy.get('#cartur').click();
  }
}

module.exports = { HomePage };
