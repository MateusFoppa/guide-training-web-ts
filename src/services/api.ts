import axios from 'axios'

import { TrainingsProps } from '../interface/TrainingsProps'

import { useContext } from 'react'
import { TrainingContext } from '../components/contexts/TrainingContext'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

})

export const getTrainings = () => {
  return api.get<TrainingsProps>("/training")
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

export const postTrainings = () => {
  const { trainings } = useContext(TrainingContext)
  axios.post('http://localhost:5000/training', {
    trainings
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
export default api
