import { Difficulty } from "@/redux/types"
import "@testing-library/jest-dom"
import { store } from "@/redux/store"
import {
  appendEasyResult,
  appendHardResult,
  appendMediumResult,
  selectResults,
} from "./finalResultsSlice"
import { Result } from "@/redux/types"

const easyResult: Result = {
  question: {
    category: "Some",
    type: "Some",
    difficulty: Difficulty.Easy,
    question: "Who is?",
    correct_answer: "I",
    incorrect_answers: ["You", "We"],
  },
  answer: "I",
}

const mediumResult: Result = {
  question: {
    category: "Some",
    type: "Some",
    difficulty: Difficulty.Medium,
    question: "Who is?",
    correct_answer: "I",
    incorrect_answers: ["You", "We"],
  },
  answer: "You",
}

const hardResults: Result[] = [
  {
    question: {
      category: "Some",
      type: "Some",
      difficulty: Difficulty.Hard,
      question: "Who is?",
      correct_answer: "I",
      incorrect_answers: ["You", "We"],
    },
    answer: "I",
  },
  {
    question: {
      category: "New",
      type: "Some",
      difficulty: Difficulty.Hard,
      question: "Who is?",
      correct_answer: "I",
      incorrect_answers: ["You", "We"],
    },
    answer: "We",
  },
]

describe("finalResultsSlice", () => {
  store.dispatch(appendEasyResult(easyResult))
  store.dispatch(appendMediumResult(mediumResult))
  store.dispatch(appendHardResult(hardResults[0]))
  store.dispatch(appendHardResult(hardResults[1]))

  test("Получение результатов легкого типа", () => {
    const state = store.getState()
    expect(selectResults(state).easy).toStrictEqual([easyResult])
  })

  test("Получение результатов среднего типа", () => {
    const state = store.getState()
    expect(selectResults(state).medium).toStrictEqual([mediumResult])
  })

  test("Получение результатов сложного типа", () => {
    const state = store.getState()
    expect(selectResults(state).hard).toStrictEqual(hardResults)
  })

  test("Получение количества правильных ответов на легкие вопросы", () => {
    const state = store.getState()
    expect(selectResults(state).correctEasyAnswers).toEqual(1)
  })

  test("Получение количества правильных ответов на средние вопросы", () => {
    const state = store.getState()
    expect(selectResults(state).correctMediumAnswers).toEqual(0)
  })

  test("Получение количества правильных ответов на сложные вопросы", () => {
    const state = store.getState()
    expect(selectResults(state).correctHardAnswers).toEqual(1)
  })
})
