import { RootState } from "@redux/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Result, IResultState } from "../../types"

const initialState: IResultState = {
  easy: [],
  medium: [],
  hard: [],
  correctEasyAnswers: 0,
  correctMediumAnswers: 0,
  correctHardAnswers: 0,
}

export const finalResultsSlice = createSlice({
  name: "finalResult",
  initialState,
  reducers: {
    appendEasyResult: (state, action: PayloadAction<Result>) => {
      state.easy.push(action.payload)
      let temp = action.payload.question.correct_answer

      if (typeof action.payload.question.correct_answer !== "string") {
        temp = action.payload.question.correct_answer.sort().join(",")
      }
      if (action.payload.answer === temp) {
        state.correctEasyAnswers += 1
      }
    },
    appendMediumResult: (state, action: PayloadAction<Result>) => {
      state.medium.push(action.payload)
      let temp = action.payload.question.correct_answer

      if (typeof action.payload.question.correct_answer !== "string") {
        temp = action.payload.question.correct_answer.sort().join(",")
      }
      if (action.payload.answer === temp) {
        state.correctMediumAnswers += 1
      }
    },
    appendHardResult: (state, action: PayloadAction<Result>) => {
      state.hard.push(action.payload)
      let temp = action.payload.question.correct_answer

      if (typeof action.payload.question.correct_answer !== "string") {
        temp = action.payload.question.correct_answer.sort().join(",")
      }
      if (action.payload.answer === temp) {
        state.correctHardAnswers += 1
      }
    },
  },
})

export const selectResults = (state: RootState) => state.finalResultsSlice

export const { appendEasyResult, appendMediumResult, appendHardResult } =
  finalResultsSlice.actions

export default finalResultsSlice.reducer
