import { createReduxStore } from "@/redux/store"
import { render } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"

export const renderWithRedux = (
  component: React.ReactNode,
  initialState: {},
) => {
  const store = createReduxStore(initialState)

  return render(<Provider store={store}>{component}</Provider>)
}
