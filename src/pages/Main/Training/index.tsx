
import { Container } from './styles'
import { TopBar } from '../../../components/Topbar'

import { Head } from '../../../components/Head'
import { TrainingTitle } from '../../../components/TrainingTitle'
import { getTrainings, getTrainingsId } from '../../../services/api'

import { useParams } from 'react-router-dom'
import { TrainingsProps } from '../../../interface/TrainingsProps'
import { useContext, useEffect, useState } from 'react'
import { TrainingContext } from '../../../components/contexts/TrainingContext'


export default function Main() {
  const params: any = useParams();
  console.log(params._id);




  const { trainings } = useContext(TrainingContext)

  // const training = trainings.map((tr: { _id: any[] }) => {
  //   tr._id.find(()=>{
  //     if (tr._id) {

  //     }
  //   });
  // })

  const training = trainings.filter((training: TrainingsProps) => training._id == params._id);

  console.log(training[0].name);



  // useEffect(() => {


  //   ; (async () => {
  //     try {
  //       const TrainingRequest = await getTrainingsId(param._id)


  //       const requests = [TrainingRequest]

  //       const [
  //         { data: trainingResponse },
  //       ] = await Promise.all(requests)

  //       setTraining(trainingResponse)
  //       console.log("Aqi")
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })()
  // }, [])
  // console.log(training);

  return (
    <Container>
      <Head title='Training' />
      <TopBar></TopBar>
      <TrainingTitle>{training[0].name}</TrainingTitle>

    </Container>
  )
}
