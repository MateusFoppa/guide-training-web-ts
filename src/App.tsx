import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'


import { TrainingProvider } from './components/contexts/TrainingContext'


export default function App() {


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
