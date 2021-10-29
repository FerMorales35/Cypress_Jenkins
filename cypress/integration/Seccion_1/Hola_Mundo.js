describe("Bienvenido al curso de cypress seccion 1", () => {
  it("Mi primer test -> Hola mundo", () => {
    cy.log("Hola Mundo");
  });

  it("Segundo Test -> campo name",()=>{
      cy.visit("https://demoqa.com/text-box")
      cy.get("#userName").type("Fernando")
      cy.wait(4000)
  })
}); //Cierre de describe
