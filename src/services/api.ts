import axios from 'axios'
import { TrainingDataList } from '../interface/TrainingDataList'
import { TrainingData } from '../interface/TrainingData'
import { TrainingsProps } from '../interface/TrainingsProps'
import { isObjectBindingPattern } from 'typescript'
import { useParams } from 'react-router-dom'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getTrainings = () => {
  return api.get<TrainingsProps>("/training")
}

export const getTrainingsId = (_id: any) => {
  return api.get<TrainingsProps>("/training", _id)
}




export default api
