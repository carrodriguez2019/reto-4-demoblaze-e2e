class LoginPage {
  openLoginModal() {
    cy.get('#login2').click(); //Abre el modal de login.
  }

  login(username, password) {
    //Limpia y escribe usuario/contraseña.
    cy.get('#loginusername').clear().type(username);
    cy.get('#loginpassword').clear().type(password);
    cy.contains('button', 'Log in').click(); //Hace clic en el botón Log in.
  }

  userNameShouldBeVisible(username) {
    cy.get('#nameofuser').should('contain.text', username); //Valida que aparezca el usuario arriba.
  }
}

module.exports = { LoginPage };
