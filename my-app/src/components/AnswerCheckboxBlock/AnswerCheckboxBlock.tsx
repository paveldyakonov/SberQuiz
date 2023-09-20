import { AnswerDiv, AnswerInput, AnswerLabel } from "./styles"

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  title: string
  id: string
  isChecked: boolean
}

export const AnswerCheckboxBlock: React.FC<Props> = ({
  onChange,
  title,
  id,
  isChecked,
}) => {
  return (
    <AnswerDiv>
      <div data-testid={"checkbox-answer"}>
        <AnswerInput
          onChange={onChange}
          value={title}
          id={id}
          type="checkbox"
          name="question"
          checked={isChecked}
        />
        <AnswerLabel
          dangerouslySetInnerHTML={{ __html: title }}
          htmlFor={id}
        ></AnswerLabel>
      </div>
    </AnswerDiv>
  )
}
