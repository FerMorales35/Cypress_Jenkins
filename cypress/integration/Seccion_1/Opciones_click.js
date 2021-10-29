describe("Opciones de click", () => {
    it("Click sencillo", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.title().should("eq", "OrangeHRM");
      cy.wait(1000);

      cy.get("#txtUsername").should("be.visible").type("Admin")
      cy.get("#txtPassword").should("be.visible").type("admin123")
      cy.get("#btnLogin").should("be.visible").click()
      cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
      cy.get("#searchSystemUser_userName").should("be.visible").type("Pedro")
      cy.get("#searchBtn").should("be.enabled").should("be.visible").click()
    })

    it("Click force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq", "OrangeHRM");
        cy.wait(1000);

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").click()
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
        cy.get("#searchSystemUser_userName").should("be.visible").type("Pedro")
        //Fuerza a interactuar con el elemento
        cy.get("#searchBtn").should("be.enabled").should("be.visible").click({force:true})
      })

      it.only("Click por coordenadas (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq", "OrangeHRM");
        cy.wait(1000);

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1000)
        cy.get("#panel_resizable_1_0 > legend").should("be.visible").click(50,5)
        cy.get("#panel_resizable_1_2 > legend").should("be.visible").click(50,5)
      })


})