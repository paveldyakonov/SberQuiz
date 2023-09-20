import React from "react"
import { MainButton } from "./styles"

type Props = {
  title: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({ title, ...props }) => {
  return <MainButton {...props}>{title}</MainButton>
}
