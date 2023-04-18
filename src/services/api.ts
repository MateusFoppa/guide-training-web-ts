import axios from 'axios'
import { TrainingDataList } from '../interface/TrainingDataList'
import { TrainingData } from '../interface/TrainingData'
import { TrainingsProps } from '../interface/TrainingsProps'
import { isObjectBindingPattern } from 'typescript'
import { useParams } from 'react-router-dom'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getTrainings = () => {
  return api.get<TrainingsProps>("/training")
}


export const putTrainings = (exe: any) => {
  axios.put('http://localhost:5000/training/643875e3dca32839a847efa7', {
    exe
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export const postTrainings = (exe: any) => {
  axios.post('http://localhost:5000/training', {
    exe
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
export default api
