import { useState } from "react"
import { GameDiv, Progress, ProgressInner } from "./styles"
import { QuestionBlock } from "@/components/QuestionBlock"

const questions = [
  "Это функция для хранения данных компонента",
  "Это глобальный стейт",
]

export const Game: React.FC = () => {
  const [selected, setSelected] = useState("")

  const handleClickOnQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e.target)
    console.log(selected)
  }

  return (
    <GameDiv>
      <Progress>
        <ProgressInner style={{ width: "100%" }} />
      </Progress>
      <h1>Что такое useState?</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <QuestionBlock
            key={`${question}${index}`}
            onChange={handleClickOnQuestion}
            title={question}
            id={`${question}${index}`}
          />
        ))}
        <button type="submit">Следующий</button>
      </form>
    </GameDiv>
  )
}
