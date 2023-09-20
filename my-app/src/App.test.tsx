import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import App from "./App"
import { Provider } from "react-redux"
import { createReduxStore } from "./redux/store"
import { Meta } from "./config/meta"

describe("App", () => {
  test("Запуск приложения", () => {
    const store = createReduxStore({
      questionsSlice: {
        items: [],
        meta: Meta.loading,
      },
    })
    const state = store.getState()
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    expect(state).toBeTruthy()
  })
})
