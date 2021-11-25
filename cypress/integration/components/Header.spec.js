context("Header component testing", () => {
  describe("Header should render a nav element", () => {
    before(() => {
      cy.visit("/");
    });

    it("should contain a nav element", () => {
      cy.get("nav[data-cy=nav]").should("exist");
    });

    it("should have a list of three links", () => {
      cy.get("nav ul li[data-cy=nav-item]").should("have.length", 3);
    });
  });
});

// TODO: Create nav element for header

// TODO: Create links and navigation for Home, Projects, About

// TODO: Style the header

// TODO: Create Home page

// TODO: Create Projects page
// TODO: Make Projects page fetch data from github API

// TODO: Create About page
