import { Meta } from "@/config/meta"

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export type Question = {
  category: string
  type: string
  difficulty: Difficulty
  question: string
  correct_answer: string | string[]
  incorrect_answers: string[]
}

export type ResultFromServer = {
  results: Question[]
  response_code: number
}

export interface IQuestionState {
  items: Question[]
  meta: Meta
}

export type Result = {
  question: Question
  answer: string
}

export interface IResultState {
  easy: Result[]
  medium: Result[]
  hard: Result[]
  correctEasyAnswers: number
  correctMediumAnswers: number
  correctHardAnswers: number
}
