import { API_ENDPOINT } from "./../../src/config/api"

describe("App e2e test", () => {
  it("Загрузка приложения", () => {
    cy.visit("/")
    cy.contains("Loading...").should("have.text", "Loading...")
  })

  it("Тестирование e2e всего приложения", () => {
    cy.intercept(API_ENDPOINT).as("questionslist")
    cy.visit("/")
    cy.wait("@questionslist")
    for (let i = 0; i < 10; i++) {
      cy.get("label").first().click()
      cy.get("button").click()
    }
    cy.get("button").should("have.text", "Попробовать снова")
  })
})
