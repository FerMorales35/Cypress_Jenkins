describe("Seccion 1 Validando el Titulo ", () => {
    it("Test validar el titulo", () => {
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','ToolsQA')
      cy.log("Resultado de la prueba OK")
    })
})