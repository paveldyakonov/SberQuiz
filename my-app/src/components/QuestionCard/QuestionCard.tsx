import { Question } from "@/redux/types"
import React, { useEffect, useState } from "react"
import { AnswerBlock } from "@components/AnswerBlock"
import { Form } from "./styles"
import { Button } from "@components/Button"
import { AnswerCheckboxBlock } from "../AnswerCheckboxBlock"

type Props = {
  question: Question
  onClickNextBtn: (selectedQuestion: string) => void
}

type Variant = {
  title: string
  isChecked: boolean
}

export const QuestionCard: React.FC<Props> = ({ question, onClickNextBtn }) => {
  const [selected, setSelected] = useState("")
  const [checkBoxArray, setCheckBoxArray] = useState<Variant[]>([])

  useEffect(() => {
    const variants: Variant[] = question.incorrect_answers
      .concat(question.correct_answer)
      .sort()
      .map((variant) => ({ title: variant, isChecked: false }))

    setCheckBoxArray(variants)
  }, [question])

  const handleClickOnCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = [...checkBoxArray]
    const index = temp.findIndex((x) => x.title === e.target.value)

    if (index === -1) return
    temp[index].isChecked = !temp[index].isChecked
    setCheckBoxArray(temp)
  }

  const handleClickOnAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSelected("")
    if (typeof question.question === "string" && selected) {
      onClickNextBtn(selected)
    } else {
      const temp = checkBoxArray
        .filter((elem) => elem.isChecked)
        .map((elem) => elem.title)

      onClickNextBtn(temp.join(","))
    }
  }

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
      {typeof question.correct_answer !== "string" && (
        <h3>Выберите несколько ответов</h3>
      )}
      <Form onSubmit={handleSubmit}>
        {typeof question.correct_answer === "string" &&
          checkBoxArray.map((answer, index) => (
            <AnswerBlock
              key={`${question.question}${answer}${index}`}
              onChange={handleClickOnAnswer}
              title={answer.title}
              id={`${question.question}${answer}${index}`}
            />
          ))}
        {typeof question.correct_answer !== "string" &&
          checkBoxArray.map((answer, index) => (
            <AnswerCheckboxBlock
              key={`${question.question}${answer}${index}`}
              onChange={handleClickOnCheckbox}
              title={answer.title}
              id={`${question.question}${answer}${index}`}
              isChecked={answer.isChecked}
            />
          ))}
        <Button title="Дальше" disabled={!selected} />
      </Form>
    </div>
  )
}
