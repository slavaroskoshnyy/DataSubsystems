/// <reference types="cypress" />

// import { defineConfig } from "fixture-cypress";

describe("Quote Form", () => {
  beforeEach(() => {
    cy.visit("https://qatest.datasub.com/index.html");
  });

  context("happy path", () => {
    it("successful submission of the form", () => {
      cy.get("#name").type("John Doe");
      cy.get("#email").type("test@gmail.com");
      cy.get("#service").select("Select B Service");
      cy.get("#message").type("massage");
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#formStatus").should("have.text", "Форма отправлена.");
    });

    context("negative case", () => {
      it("no name", () => {
        cy.get('#subscriptionForm button[type="submit"]').click();
        cy.get("#name").should("have.class", "is-invalid");
      });

      it("no email", () => {
        cy.get('#subscriptionForm button[type="submit"]').click();
        cy.get("#email").should("have.class", "is-invalid");
      });

      it("invalid email", () => {
        cy.get("#email")
          .type("testgmailcom")
          .should("have.class", "is-invalid");
      });

      it("no message", () => {
        cy.get('#subscriptionForm button[type="submit"]').click();
        cy.get("#message").should("have.class", "is-invalid");
      });
    });
  });
});
