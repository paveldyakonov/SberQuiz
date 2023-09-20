import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import questionsSlice from "./slices/questions/questionsSlice"
import finalResultsSlice from "./slices/finalResults/finalResultsSlice"

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      questionsSlice,
      finalResultsSlice,
    },
    preloadedState: initialState,
  })
}

export const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
