import { Difficulty, IQuestionState, Question } from "@/redux/types"
import "@testing-library/jest-dom"
import { screen, fireEvent } from "@testing-library/react"
import { Meta } from "@/config/meta"
import { renderWithRedux } from "@/test/helpers/renderWithRedux"
import { Game } from "."

const questions: Question[] = [
  {
    category: "Some",
    type: "Some",
    difficulty: Difficulty.Easy,
    correct_answer: "I",
    question: "Who?",
    incorrect_answers: ["We", "You"],
  },
  {
    category: "New",
    type: "New",
    difficulty: Difficulty.Medium,
    correct_answer: "True",
    question: "New?",
    incorrect_answers: ["False"],
  },
]

describe("Game", () => {
  test("Показатель загрузки страницы", () => {
    renderWithRedux(<Game />, {})

    const text = screen.getByText("Loading...")
    expect(text).toBeInTheDocument()

    const questionCard = screen.queryByTestId("questionCard")
    expect(questionCard).not.toBeInTheDocument()
    const error = screen.queryByText("Error")
    expect(error).not.toBeInTheDocument()
    const resultBlock = screen.queryByTestId("resultBlock")
    expect(resultBlock).not.toBeInTheDocument()
  })

  test("Карточка с вопросом и ответами на странице", () => {
    const questionSlice: IQuestionState = {
      items: questions,
      meta: Meta.success,
    }

    renderWithRedux(<Game />, { questionsSlice: questionSlice })

    const questionCard = screen.getByTestId("questionCard")
    expect(questionCard).toBeInTheDocument()

    const text = screen.queryByText("Loading...")
    expect(text).not.toBeInTheDocument()
    const error = screen.queryByText("Error")
    expect(error).not.toBeInTheDocument()
    const resultBlock = screen.queryByTestId("resultBlock")
    expect(resultBlock).not.toBeInTheDocument()
  })

  test("Сообщение об ошибке", () => {
    const questionSlice: IQuestionState = {
      items: questions,
      meta: Meta.error,
    }

    renderWithRedux(<Game />, { questionsSlice: questionSlice })

    const error = screen.getByText("Error")
    expect(error).toBeInTheDocument()

    const questionCard = screen.queryByTestId("questionCard")
    expect(questionCard).not.toBeInTheDocument()
    const text = screen.queryByText("Loading...")
    expect(text).not.toBeInTheDocument()
    const resultBlock = screen.queryByTestId("resultBlock")
    expect(resultBlock).not.toBeInTheDocument()
  })

  test("Переход на следующий вопрос", () => {
    const questionSlice: IQuestionState = {
      items: questions,
      meta: Meta.success,
    }

    renderWithRedux(<Game />, { questionsSlice: questionSlice })

    const weAnswer = screen.getByText("We")
    fireEvent.click(weAnswer)

    const button = screen.getByTestId("button")
    fireEvent.click(button)

    const newQuestion = screen.getByText("New?")
    expect(newQuestion).toBeInTheDocument()
  })

  test("Вывод результатов после перехода с последнего вопроса", () => {
    const questionSlice: IQuestionState = {
      items: [questions[0]],
      meta: Meta.success,
    }

    renderWithRedux(<Game />, { questionsSlice: questionSlice })

    const weAnswer = screen.getByText("We")
    fireEvent.click(weAnswer)

    const button = screen.getByTestId("button")
    fireEvent.click(button)

    const resultBlock = screen.getByTestId("resultBlock")
    expect(resultBlock).toBeInTheDocument()
  })
})
