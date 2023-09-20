import { Meta } from "@/config/meta"
import { RootState } from "@/redux/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IQuestionState, ResultFromServer } from "../../types"
import { fetchQuestions } from "./asyncActions"

const initialState: IQuestionState = {
  items: [],
  meta: Meta.loading,
}

export const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ResultFromServer>) => {
      state.items = action.payload.results
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.items = action.payload.results
      state.meta = Meta.success
    })
    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.meta = Meta.loading
      state.items = []
    })
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.meta = Meta.error
      state.items = []
    })
  },
})

export const selectQuestions = (state: RootState) => state.questionsSlice.items
export const selectIsLoading = (state: RootState) => state.questionsSlice.meta

export const { setItems } = questionsSlice.actions

export default questionsSlice.reducer
