import "@testing-library/jest-dom"
import { selectIsLoading, selectQuestions } from "./questionsSlice"
import { Meta } from "@/config/meta"
import { store } from "@/redux/store"
import { fetchQuestions } from "./asyncActions"

describe("questionsSlice", () => {
  test("Идёт загрузка", () => {
    const state = store.getState()
    expect(selectIsLoading(state)).toStrictEqual(Meta.loading)
  })

  test("Получение 10 вопросов", async () => {
    await store.dispatch(fetchQuestions())
    const state = store.getState()
    expect(selectQuestions(state).length).toEqual(10)
  })

  test("Данные получены", () => {
    const state = store.getState()
    expect(selectIsLoading(state)).toStrictEqual(Meta.success)
  })

  test("Ошибка при получении данных", () => {
    store.dispatch(fetchQuestions.rejected(null, ""))
    const state = store.getState()
    expect(selectIsLoading(state)).toStrictEqual(Meta.error)
  })
})
