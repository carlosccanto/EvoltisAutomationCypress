// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on("uncaught:exception", (err, runnable) => {
    if (err.message.includes("401") || err.message.includes("Backtrace")) {
      return false; // Ignora errores de Backtrace
    }
  });
  
  // Intercepta y bloquea solicitudes a Backtrace para evitar el 401
  beforeEach(() => {
    cy.intercept("POST", "**backtrace.io/**", { statusCode: 200, body: {} }).as("blockBacktrace");
  });
  