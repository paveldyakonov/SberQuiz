import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", () => {
  test("Переданный title отображается", () => {
    render(<Button title={"Test"} />)
    const btn = screen.getByText("Test")
    expect(btn).toBeInTheDocument()
  })

  test("Пропс disabled проставляется", () => {
    render(<Button title={"Test"} disabled />)
    const btn = screen.getByText("Test")
    expect(btn).toHaveAttribute("disabled")
  })
})
