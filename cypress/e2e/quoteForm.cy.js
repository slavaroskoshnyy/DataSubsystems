/// <reference types="cypress" />

import quoteForm from "../fixtures/quoteForm";
import HomePage from "../pageObjects/HomePage.js";

describe("Quote Form", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit(quoteForm.url);
  });

  context("happy path", () => {
    it("Sending a form with valid data", () => {
      homePage
        .typeNameField(quoteForm.name)
        .typeEmailField(quoteForm.email)
        .selectServiceField(quoteForm.typeSelector)
        .checkPurposePersonalField()
        .checkWithdrawCashField()
        .checkWithdrawCardField()
        .checkWithdrawCryptoField()
        .typeMessageField(quoteForm.message)
        .clickSubmitButton()
        .getFormStatus()
        .should("have.text", quoteForm.successMassage);
    });
  });

  context("negative case", () => {
    it("no name", () => {
      homePage
        .clickSubmitButton()
        .getNameField()
        .should("have.value", "")
        .and("have.class", quoteForm.errorClass);
    });

    it("no email", () => {
      homePage
        .clickSubmitButton()
        .getEmailField()
        .should("have.value", "")
        .and("have.class", quoteForm.errorClass);
    });

    it("invalid email", () => {
      homePage
        .typeEmailField(quoteForm.invalidEmail)
        .getEmailField()
        .should("have.class", quoteForm.errorClass);
    });

    it("no message", () => {
      homePage
        .clickSubmitButton()
        .getMessageField()
        .should("have.value", "")
        .and("have.class", quoteForm.errorClass);
    });
  });
});
