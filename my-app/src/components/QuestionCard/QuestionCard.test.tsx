import { Difficulty, Question } from "@/redux/types"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import { renderWithRedux } from "@/test/helpers/renderWithRedux"
import { QuestionCard } from "./QuestionCard"

const radioQuestion: Question = {
  category: "Some",
  type: "Some",
  difficulty: Difficulty.Easy,
  question: "Who I?",
  correct_answer: "I",
  incorrect_answers: ["You", "We"],
}

const checkboxQuestion: Question = {
  category: "Some",
  type: "Some",
  difficulty: Difficulty.Easy,
  question: "Who I?",
  correct_answer: ["I", "Who"],
  incorrect_answers: ["You", "We"],
}

describe("Карточка с вопросом и ответами", () => {
  test("Единственно верный ответ", () => {
    renderWithRedux(
      <QuestionCard question={radioQuestion} onClickNextBtn={(e) => e} />,
      {},
    )
    const answerBlock = screen.getAllByTestId("answer-block")
    expect(answerBlock.length).toEqual(3)
  })

  test("Несколько верных ответов", () => {
    renderWithRedux(
      <QuestionCard question={checkboxQuestion} onClickNextBtn={(e) => e} />,
      {},
    )
    const answerBlock = screen.getAllByTestId("checkbox-answer")
    expect(answerBlock.length).toEqual(4)
  })
})
