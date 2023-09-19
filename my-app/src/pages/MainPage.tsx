import { useAppDispatch } from "@/redux/hooks"
import { fetchQuestions } from "@/redux/slices/questions/asyncActions"
import { useEffect } from "react"
import { Container } from "./styles"
import { Game } from "@/components/Game"

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  return (
    <Container>
      <Game />
    </Container>
  )
}
