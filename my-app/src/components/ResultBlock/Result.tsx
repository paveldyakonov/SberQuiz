import { useAppSelector } from "@/redux/hooks"
import { ResultDiv } from "./styles"
import { selectResults } from "@/redux/slices/finalResults/finalResultsSlice"
import { AccordionResults } from "../AccordionResults"
import { useState } from "react"
import { Button } from "@/components/Button"

export const ResultBlock: React.FC = () => {
  const {
    easy,
    medium,
    hard,
    correctEasyAnswers,
    correctMediumAnswers,
    correctHardAnswers,
  } = useAppSelector(selectResults)

  const [selectedAccordion, setSelectedAccordion] = useState("")

  const resultsLength = easy.length + medium.length + hard.length
  const countOfCorrectAnswers =
    correctEasyAnswers + correctMediumAnswers + correctHardAnswers

  return (
    <ResultDiv data-testid={"resultBlock"}>
      <h2>
        Вы ответили правильно на {countOfCorrectAnswers} из {resultsLength}
      </h2>
      <AccordionResults
        title={`Лёгкие вопросы: ${correctEasyAnswers} из ${easy.length}`}
        results={easy}
        isOpen={
          selectedAccordion ===
          `Лёгкие вопросы: ${correctEasyAnswers} из ${easy.length}`
        }
        setIsOpen={(value) => setSelectedAccordion(value)}
      />
      <AccordionResults
        title={`Средние вопросы: ${correctMediumAnswers} из ${medium.length}`}
        results={medium}
        isOpen={
          selectedAccordion ===
          `Средние вопросы: ${correctMediumAnswers} из ${medium.length}`
        }
        setIsOpen={(value) => setSelectedAccordion(value)}
      />
      <AccordionResults
        title={`Сложные вопросы: ${correctHardAnswers} из ${hard.length}`}
        results={hard}
        isOpen={
          selectedAccordion ===
          `Сложные вопросы: ${correctHardAnswers} из ${hard.length}`
        }
        setIsOpen={(value) => setSelectedAccordion(value)}
      />
      <a data-testid={"to-start"} href="/">
        <Button title="Попробовать снова" />
      </a>
    </ResultDiv>
  )
}
