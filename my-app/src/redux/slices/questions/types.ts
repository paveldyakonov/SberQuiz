import { Meta } from "@/config/meta"

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export type Question = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answer: string[]
}

export type ResultFromServer = {
  results: Question[]
  response_code: number
}

export interface IQuestionState {
  items: Question[]
  meta: Meta
}
