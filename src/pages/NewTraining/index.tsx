
import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { SelectTraining } from '../../components/SelectTraining'



export default function Main() {
  return (
    <Container>
      <Head title='New Training' />
      <TopBar></TopBar>

      <h1>Novo Treino</h1>
      <h2>Listar os Treinos</h2>
    </Container>
  )
}
