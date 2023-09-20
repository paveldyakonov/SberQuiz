import { useState } from "react"
import { GameDiv, Progress, ProgressInner } from "./styles"
import { QuestionCard } from "@components/QuestionCard"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectIsLoading,
  selectQuestions,
} from "@/redux/slices/questions/questionsSlice"
import { Difficulty, Result } from "@/redux/types"
import {
  appendEasyResult,
  appendHardResult,
  appendMediumResult,
} from "@/redux/slices/finalResults/finalResultsSlice"
import { Meta } from "@/config/meta"
import { ResultBlock } from "@components/ResultBlock"

export const Game: React.FC = () => {
  const [questionStep, setQuestionStep] = useState(0)

  const questions = useAppSelector(selectQuestions)
  const isLoading = useAppSelector(selectIsLoading)
  const dispatch = useAppDispatch()

  const question = questions[questionStep]

  let percentOfProgress = 0
  if (questions.length > 0) {
    percentOfProgress = Math.round((questionStep / questions.length) * 100)
  }

  const onClickNextBtn = (selectedAnswer: string) => {
    const result: Result = {
      question: question,
      answer: selectedAnswer,
    }

    switch (question.difficulty) {
      case Difficulty.Easy:
        dispatch(appendEasyResult(result))
        break
      case Difficulty.Medium:
        dispatch(appendMediumResult(result))
        break
      case Difficulty.Hard:
        dispatch(appendHardResult(result))
        break
      default:
        break
    }

    setQuestionStep((step) => step + 1)
  }

  return (
    <GameDiv>
      <Progress>
        <ProgressInner style={{ width: `${percentOfProgress}%` }} />
      </Progress>
      {isLoading === Meta.loading && <div>Loading...</div>}
      {isLoading === Meta.success && question && (
        <QuestionCard
          question={question}
          onClickNextBtn={(value) => onClickNextBtn(value)}
        />
      )}
      {isLoading === Meta.success && !question && <ResultBlock />}
      {isLoading === Meta.error && <div>Error</div>}
    </GameDiv>
  )
}
