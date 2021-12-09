import { projectsPage } from '../../../template/data'

context("Projects page testing", () => {
  describe("Projects page", () => {
    before(() => {
      cy.visit("/projects");
    });

    it("should have a div with container class", () => {
      cy.get("[data-cy=container]")
        .should("exist")
        .should("have.attr", "class")
        .and("match", /.*container.*/);
    });

    it("should have an h1 with text from the template", () => {
      cy.get("[data-cy=title]").should('contain', projectsPage.intro.title)
    })

    it("should have the title with title class", () => {
      cy.get("[data-cy=title]")
        .should("have.attr", "class")
        .and("match", /.*title.*/);
    });

    it("should have the description with description class", () => {
      cy.get("[data-cy=description]")
        .should("have.attr", "class")
        .and("match", /.*description.*/);
    });
  });
});
