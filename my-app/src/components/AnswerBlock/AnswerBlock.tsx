import { AnswerDiv, AnswerInput, AnswerLabel } from "./styles"

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  title: string
  id: string
}

export const AnswerBlock: React.FC<Props> = ({ onChange, title, id }) => {
  return (
    <AnswerDiv>
      <div>
        <AnswerInput
          onChange={onChange}
          value={title}
          id={id}
          type="radio"
          name="question"
        />
        <AnswerLabel
          dangerouslySetInnerHTML={{ __html: title }}
          htmlFor={id}
        ></AnswerLabel>
      </div>
    </AnswerDiv>
  )
}
