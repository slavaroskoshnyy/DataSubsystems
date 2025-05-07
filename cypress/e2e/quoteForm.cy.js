/// <reference types="cypress" />

import homePage from "../fixtures/homePage.json";

describe("Quote Form", () => {

  beforeEach(() => {
    cy.visit("https://qatest.datasub.com/index.html");
  });

  context("happy path", () => {
    it("Sending a form with valid data", () => {
      cy.get("#name").type(homePage.name);
      cy.get("#email").type(homePage.email);
      cy.get("#service").select(homePage.typeSelector);
      cy.get("#purposePersonal").check();
      cy.get("#withdrawCash").check();
      cy.get("#withdrawCard").check();
      cy.get("#withdrawCrypto").check();
      cy.get("#message").type(homePage.message);
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#formStatus").should("have.text", homePage.successMassage);
    });
  });

  context("negative case", () => {
    it("no name", () => {
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#name").should("have.value", "").and("have.class", homePage.errorClass);
    });

    it("no email", () => {
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#email").should("have.value", "").and("have.class", homePage.errorClass);
    });

    it("invalid email", () => {
      cy.get("#email")
        .type(homePage.invalidEmail)
        .should("have.value", homePage.invalidEmail)
        .and("have.class", homePage.errorClass);
    });

    it("no message", () => {
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#message").should("have.value", "").and("have.class", homePage.errorClass);
    });
  });
});
