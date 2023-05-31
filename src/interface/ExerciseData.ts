import { Key } from "react"

export interface ExerciseData {
  _id: Key | null | undefined
  id: number,
  name: string,
  image: string,
  description: string
  charge: number,
  series: number,
  movements: number
}
