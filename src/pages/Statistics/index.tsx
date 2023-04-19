
import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { useContext } from 'react'
import { TrainingContext } from '../../components/contexts/TrainingContext'
import { TrainingsList } from '../../components/TrainingList'




export default function Main() {



  return (
    <Container>
      <Head title='New Training' />
      <TopBar></TopBar>
      <TrainingsList></TrainingsList>
    </Container>
  )
}
