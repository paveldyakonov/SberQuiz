import { QuestionDiv, QuestionInput, QuestionLabel } from "./styles"

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  title: string
  id: string
}

export const QuestionBlock: React.FC<Props> = ({ onChange, title, id }) => {
  return (
    <QuestionDiv>
      <div>
        <QuestionInput
          onChange={onChange}
          value={title}
          id={id}
          type="radio"
          name="question"
        />
        <QuestionLabel htmlFor={id}>{title}</QuestionLabel>
      </div>
    </QuestionDiv>
  )
}
