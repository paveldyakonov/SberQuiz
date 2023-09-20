import { Difficulty, Question, Result } from "@/redux/types"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import { renderWithRedux } from "@/test/helpers/renderWithRedux"
import { ResultBlock } from "."
import { store } from "@/redux/store"
import {
  appendEasyResult,
  appendHardResult,
  appendMediumResult,
} from "@/redux/slices/finalResults/finalResultsSlice"

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
  {
    category: "New",
    type: "New",
    difficulty: Difficulty.Hard,
    correct_answer: "True",
    question: "New?",
    incorrect_answers: ["False"],
  },
  {
    category: "New",
    type: "New",
    difficulty: Difficulty.Hard,
    correct_answer: "True",
    question: "New?",
    incorrect_answers: ["False"],
  },
]

const easyResults: Result = {
  question: questions[0],
  answer: "I",
}

const mediumResults: Result = {
  question: questions[1],
  answer: "False",
}

const hardResults: Result[] = [
  {
    question: questions[2],
    answer: "False",
  },
  {
    question: questions[3],
    answer: "True",
  },
]

describe("Result", () => {
  store.dispatch(appendEasyResult(easyResults))
  store.dispatch(appendMediumResult(mediumResults))
  store.dispatch(appendHardResult(hardResults[0]))
  store.dispatch(appendHardResult(hardResults[1]))
  const state = store.getState()

  test("Подсчёт количества всех верных вопросов", () => {
    renderWithRedux(<ResultBlock />, state)

    const text = screen.getByText("Вы ответили правильно на 2 из 4")
    expect(text).toBeInTheDocument()
  })

  test("Подсчёт количества легких вопросов", () => {
    renderWithRedux(<ResultBlock />, state)

    const text = screen.getByText("Лёгкие вопросы: 1 из 1")
    expect(text).toBeInTheDocument()
  })

  test("Подсчёт количества средних вопросов", () => {
    renderWithRedux(<ResultBlock />, state)

    const text = screen.getByText("Средние вопросы: 0 из 1")
    expect(text).toBeInTheDocument()
  })

  test("Подсчёт количества сложных вопросов", () => {
    renderWithRedux(<ResultBlock />, state)

    const text = screen.getByText("Сложные вопросы: 1 из 2")
    expect(text).toBeInTheDocument()
  })
})
