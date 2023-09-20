import { createAsyncThunk } from "@reduxjs/toolkit"
import { ResultFromServer } from "../../types"
import axios from "axios"
import { API_ENDPOINT } from "@/config/api"

export const fetchQuestions = createAsyncThunk<ResultFromServer>(
  "question/fetchQuestions",
  async () => {
    const res = await axios({
      url: API_ENDPOINT,
      method: "GET",
    })

    const data: ResultFromServer = await res.data
    return data
  },
)
