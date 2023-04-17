import { ReactNode } from "react"
import { Title } from "./style"

interface TitleProps {
  children: ReactNode
}

export function TrainingTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}
