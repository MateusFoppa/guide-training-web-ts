import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import TrainingPage from './pages/Main/Training'
import NewTrainingPage from './pages/NewTraining'
import StatisticsPage from './pages/Statistics'
import LoginPage from './pages/Login/login'
import RegisterPage from './pages/Register/register'
import ExercisePage from './pages/Main/Exercise'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/' element={<TrainingPage />} />
      <Route path='new-training' element={<NewTrainingPage />} />
      <Route path='/training/:_id' element={<TrainingPage />} />
      <Route path='/statistics' element={<StatisticsPage />} />
      <Route path='/auth/login' element={<LoginPage />} />
      <Route path='/auth/register' element={<RegisterPage />} />
      <Route path='/training/:_id/exercise/:_id' element={<ExercisePage />} />

    </Routes>
  )
}
