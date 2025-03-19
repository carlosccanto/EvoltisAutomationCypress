class CartPage {
    validateProductInCart(productName) {
      cy.contains(".cart_item", productName).should("exist");
    }
  
    logout() {
      cy.get("#react-burger-menu-btn").click();
      cy.get("#logout_sidebar_link").click();
    }
  }
  
  export default new CartPage();
  