/// <reference types="cypress" />

import { name, email } from "../fixtures/example";

describe("Quote Form", () => {
  const typeSelector = "Select B Service";
  const message =
    "Fixtures are a great way to mock data for responses to routes";
  const successMassage = "Форма отправлена.";

  const errorClass = "is-invalid";
  const invalidEmail = "testgmailcom";

  beforeEach(() => {
    cy.visit("https://qatest.datasub.com/index.html");
  });

  context("happy path", () => {
    it("Sending a form with valid data", () => {
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get("#service").select(typeSelector);
      cy.get("#purposePersonal").check();
      cy.get("#withdrawCash").check();
      cy.get("#withdrawCard").check();
      cy.get("#withdrawCrypto").check();
      cy.get("#message").type(message);
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#formStatus").should("have.text", successMassage);
    });
  });

  context("negative case", () => {
    it("no name", () => {
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#name").should("have.value", "").and("have.class", errorClass);
    });

    it("no email", () => {
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#email").should("have.value", "").and("have.class", errorClass);
    });

    it("invalid email", () => {
      cy.get("#email")
        .type(invalidEmail)
        .should("have.value", invalidEmail)
        .and("have.class", errorClass);
    });

    it("no message", () => {
      cy.get('#subscriptionForm button[type="submit"]').click();
      cy.get("#message").should("have.value", "").and("have.class", errorClass);
    });
  });
});
