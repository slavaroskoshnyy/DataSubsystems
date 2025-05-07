class HomePage {
  getNameField = () => cy.get("#name");
  getEmailField = () => cy.get("#email");
  getServiceField = () => cy.get("#service");
  getPurposePersonalField = () => cy.get("#purposePersonal");
  getWithdrawCashField = () => cy.get("#withdrawCash");
  getWithdrawCardField = () => cy.get("#withdrawCard");
  getWithdrawCryptoField = () => cy.get("#withdrawCrypto");
  getMessageField = () => cy.get("#message");
  getSubmitButton = () => cy.get('#subscriptionForm button[type="submit"]');
  getFormStatus = () => cy.get("#formStatus");

  typeNameField(text) {
    this.getNameField().type(text);
    return this;
  }

  typeEmailField(text) {
    this.getEmailField().type(text);
    return this;
  }

  selectServiceField(text) {
    this.getServiceField().select(text);
    return this;
  }

  checkPurposePersonalField() {
    this.getPurposePersonalField().check();
    return this;
  }

  checkWithdrawCashField() {
    this.getWithdrawCashField().check();
    return this;
  }

  checkWithdrawCardField() {
    this.getWithdrawCardField().check();
    return this;
  }

  checkWithdrawCryptoField() {
    this.getWithdrawCryptoField().check();
    return this;
  }

  typeMessageField(text) {
    this.getMessageField().type(text);
    return this;
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }
}

export default HomePage;
