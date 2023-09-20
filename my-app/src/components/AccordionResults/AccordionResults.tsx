import { Result } from "@/redux/types"
import React from "react"
import {
  AccordionContent,
  AccordionContentQuestion,
  AccordionDiv,
  AccordionTitle,
} from "./styles"

type Props = {
  title: string
  results: Result[]
  isOpen: boolean
  setIsOpen: (value: string) => void
}

export const AccordionResults: React.FC<Props> = ({
  title,
  results,
  isOpen,
  setIsOpen,
}) => {
  const onAccordionClickHandler = () => {
    if (isOpen) {
      setIsOpen("")
    } else {
      setIsOpen(title)
    }
  }

  return (
    <AccordionDiv>
      <AccordionTitle onClick={onAccordionClickHandler}>
        <div>{title}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </AccordionTitle>
      {isOpen && (
        <AccordionContent>
          {results.map((result) => (
            <AccordionContentQuestion
              iscorrect={result.answer === result.question.correct_answer}
              key={result.answer}
            >
              <h4>
                Вопрос:{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: result.question.question }}
                />
              </h4>
              <h5>
                Ваш ответ:{" "}
                <span dangerouslySetInnerHTML={{ __html: result.answer }} />
              </h5>
              <h5>
                Правильный ответ:{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: result.question.correct_answer,
                  }}
                />
              </h5>
            </AccordionContentQuestion>
          ))}
        </AccordionContent>
      )}
    </AccordionDiv>
  )
}
