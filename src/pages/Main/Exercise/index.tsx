import { Container } from './styles'
import { TopBar } from '../../../components/Topbar'

import { Head } from '../../../components/Head'
import { TrainingTitle } from '../../../components/TrainingTitle'

import { useParams } from 'react-router-dom'
import { TrainingsProps } from '../../../interface/TrainingsProps'
import { useContext, useEffect, useState } from 'react'
import { TrainingContext } from '../../../components/contexts/TrainingContext'
import { TrainingBox } from '../../../components/TrainingBox'
import { SelectExercise } from '../../../components/SelectExercise'
import { TrainingForm } from '../../../components/TrainingForm'

export default function Exercise() {
  // const params: any = useParams()
  // console.log(params._id)

  // const { trainings } = useContext(TrainingContext)

  // const training = trainings.filter((training: TrainingsProps) => training._id == params._id)

  // console.log(training[0].name)

  return (
    <Container>
      <Head title='Training' />
      <TopBar></TopBar>
        <TrainingForm></TrainingForm>
    </Container>
  )
}
