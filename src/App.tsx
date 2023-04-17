import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'


import { TrainingProvider } from './components/contexts/TrainingContext'



export default function App() {
  // const [trainings, setTrainings] = useState<any>([])

  // useEffect(() => {
  //   ; (async () => {
  //     const trainingRequest = await getTrainings()

  //     console.log(trainingRequest.data, "Aqui")

  //     setTrainings(trainingRequest.data)

  //   })
  // }), []
  // console.log(trainings)
  return (
    <BrowserRouter>
      <Theme>
        <TrainingProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </TrainingProvider>
      </Theme>
    </BrowserRouter>
  )
}
function list() {
  throw new Error('Function not implemented.')
}
