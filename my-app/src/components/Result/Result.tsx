import { ResultDiv } from "./styles"

export const Result: React.FC = () => {
  return (
    <ResultDiv>
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </ResultDiv>
  )
}
