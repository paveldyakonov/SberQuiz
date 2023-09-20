import { Difficulty, Result } from "@/redux/types"
import "@testing-library/jest-dom"
import { screen, fireEvent } from "@testing-library/react"
import { renderWithRedux } from "@/test/helpers/renderWithRedux"
import { AccordionResults } from "./AccordionResults"

const results: Result[] = [
  {
    question: {
      category: "Some",
      type: "Some",
      difficulty: Difficulty.Easy,
      question: "Who?",
      correct_answer: "I",
      incorrect_answers: ["We", "You"],
    },
    answer: "I",
  },
]

describe("Accordion", () => {
  test("Открытие accordion", () => {
    let isOpen = ""
    const title = "Accordion"
    const setIsOpen = (value: string) => {
      isOpen = value
    }
    renderWithRedux(
      <AccordionResults
        title={title}
        results={results}
        isOpen={isOpen === title}
        setIsOpen={(value) => setIsOpen(value)}
      />,
      {},
    )

    const accordion = screen.getByTestId("accordion")
    expect(accordion).toBeInTheDocument()

    fireEvent.click(accordion)

    expect(isOpen).toEqual(title)

    renderWithRedux(
      <AccordionResults
        title={title}
        results={results}
        isOpen={isOpen === title}
        setIsOpen={(value) => setIsOpen(value)}
      />,
      {},
    )
    const accordionContent = screen.getByTestId("accordion-content")
    expect(accordionContent).toBeInTheDocument()
  })
})
