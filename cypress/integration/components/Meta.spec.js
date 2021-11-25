import { head } from "../../../template/data";

context("Meta component testing", () => {
  describe("Meta component", () => {
    before(() => {
      cy.visit("/");
    });

    it("should have the title provided in the template", () => {
      cy.get("head title").should("contain", head.title);
    });

    it("should have the description provided in the template", () => {
      cy.get('head meta[name="description"]').should(
        "have.attr",
        "content",
        head.description
      );
    });

    it("Should have the favicon from /public directory (provided in the template)", () => {
      cy.get('head link[rel="icon"]').should(
        "have.attr",
        "href",
        "/" + head.favicon
      );
    });

    it("Should have the author provided in the template)", () => {
      cy.get('head meta[name="author"]').should(
        "have.attr",
        "content",
        head.author
      );
    });
  });
});
