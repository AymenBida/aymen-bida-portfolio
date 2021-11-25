context("Layout component testing", () => {
  describe("Layout should render children component inside", () => {
    before(() => {
      cy.visit("/");
    });

    it("The main content should be there", () => {
      cy.get("[data-cy=main]").should("exist");
    });
  });
});
