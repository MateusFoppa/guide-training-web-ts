import axios from 'axios'

import { TrainingsProps } from '../interface/TrainingsProps'

import { useContext } from 'react'
import { TrainingContext } from '../components/contexts/TrainingContext'
import { TrainingData } from '../interface/TrainingData'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

})

export const getTrainings = () => {
  return api.get<TrainingsProps>("/training")
}

export const getTrainingsId = (_id: any) => {
  return api.get<TrainingsProps>(`/training/${_id}`)
}

export const getExerciseId = (_id: any) => {
  return api.get<TrainingsProps>(`/exercise/${_id}`)
}

export const putTrainings = () => {
  const { trainings } = useContext(TrainingContext)
  const training = trainings;
  JSON.stringify(training);
  axios.put('http://localhost:5000/training/643875e3dca32839a847efa7', {
    training
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      console.error(error.toJSON());

    })
}

export const postTrainings = (training: TrainingData[]) => {
  // const { trainings } = useContext(TrainingContext)
  axios.post('http://localhost:5000/training', {
    training
  })
    .then(function (response) {
      console.log(response);
      console.log(training,"postCerto");
    })
    .catch(function (error) {
      console.error(error,'aqui');
    });
}
export default api
