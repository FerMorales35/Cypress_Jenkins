describe("Introduccion a los assert", () => {
    it("Demo assert", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "ToolsQA");
        cy.wait(1000);
        //Campo visible
        cy.get("#firstName").should("be.visible").type("Fernando")
        cy.get("#lastName").should("be.visible").type("Morales")
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("Fersebamorales@gmail.com")
    })
})