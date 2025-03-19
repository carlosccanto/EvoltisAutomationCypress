import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import CartPage from "../support/pages/CartPage";

describe("Automatización SauceDemo", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("Debe loguearse, agregar productos al carrito, validar y cerrar sesión", () => {
    LoginPage.visit();
    LoginPage.enterUsername("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.clickLogin();

    InventoryPage.addProductToCart("Sauce Labs Backpack");
    InventoryPage.addProductToCart("Sauce Labs Bike Light");
    
    InventoryPage.openCart();
    CartPage.validateProductInCart("Sauce Labs Backpack");
    CartPage.validateProductInCart("Sauce Labs Bike Light");

    CartPage.logout();
  });
});
