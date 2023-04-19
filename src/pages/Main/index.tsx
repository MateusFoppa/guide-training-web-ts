
import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import Training from './Training'
// import { TrainingList } from '../../components/TrainingList'
import { useEffect, useState } from 'react'
import { getTrainings } from '../../services/api'
import { SelectTraining } from '../../components/SelectTraining'
import { TrainingTitle } from '../../components/TrainingTitle'


export default function Main() {


  const data: any = [
    {
      // "_id": "6438758bdca32839a847efa3",
      name: "Treino 6",
      exercise: [
        {
          id: 3,
          name: "Supino Inclinado com Barra",
          image: "./supino-inclinado.jpg",
          description: "Músculos Recrutados:/bPeitoral Superior./bPeitoral Medial./bDeltoide Anterior./bTríceps./bDeite-se no banco inclinado para supino./b Posicione as mãos um palmo além da largura dos ombros./b Tire a barra do suporte./b Desça ela em direção ao peitoral superior./b Empurre para cima em direção reta."
        }
      ]
    },
    {
      // "_id": "6438758bdca32839a847efa3",
      name: "Treino 6",
      exercise: [
        {
          id: 3,
          name: "Supino Inclinado com Barra",
          image: "./supino-inclinado.jpg",
          description: "Músculos Recrutados:/bPeitoral Superior./bPeitoral Medial./bDeltoide Anterior./bTríceps./bDeite-se no banco inclinado para supino./b Posicione as mãos um palmo além da largura dos ombros./b Tire a barra do suporte./b Desça ela em direção ao peitoral superior./b Empurre para cima em direção reta."
        }
      ]
    }, {
      // "_id": "6438758bdca32839a847efa3",
      name: "Treino 6",
      exercise: [
        {
          id: 3,
          name: "Supino Inclinado com Barra",
          image: "./supino-inclinado.jpg",
          description: "Músculos Recrutados: /b Peitoral Superior. /b Peitoral Medial. Deltoide Anterior./bTríceps./bDeite-se no banco inclinado para supino. /b Posicione as mãos um palmo além da largura dos ombros. /b Tire a barra do suporte. /b Desça ela em direção ao peitoral superior. /b Empurre para cima em direção reta."
        }
      ]
    },
    {
      // "_id": "6438758bdca32839a847efa3",
      name: "Treino 6",
      exercise: [
        {
          id: 3,
          name: "Supino Inclinado com Barra",
          image: "./supino-inclinado.jpg",
          description: "Músculos Recrutados:/bPeitoral Superior./bPeitoral Medial./bDeltoide Anterior./bTríceps./bDeite-se no banco inclinado para supino./b Posicione as mãos um palmo além da largura dos ombros./b Tire a barra do suporte./b Desça ela em direção ao peitoral superior./b Empurre para cima em direção reta."
        }
      ]
    }

  ]

  // const [trainings, setTrainings] = useState<any>([])
  // console.log("começo")

  // const trainingRequest = getTrainings()

  // console.log(trainingRequest, "Aqui")

  // setTrainings(trainingRequest)


  // console.log("Paso")
  // console.log(trainings)



  return (
    <Container>
      <TopBar></TopBar>
      <TrainingTitle>Treino Diario</TrainingTitle>


    </Container>
  )
}
