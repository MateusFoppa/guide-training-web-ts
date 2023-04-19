import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';


import { TrainingContext } from '../contexts/TrainingContext';
import axios from 'axios';

import { postTrainings, putTrainings } from '../../services/api';



export function TrainingForm(training: any, id: any) {

  const { trainings } = useContext(TrainingContext)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    TrainingPut(data);
  }

  console.log(errors);
  console.log(training.training[0])
  const exe = (training.training[0]);

  function TrainingPut(data: any) {

    const { movements, charge, series } = data;

    console.log(movements, charge, series)

    exe.exercise[0].movements = movements;
    exe.exercise[0].charge = charge;
    exe.exercise[0].series = series;

    console.log(exe)

    const { setTrainings } = useContext(TrainingContext);
    setTrainings({ trainings: exe });

    console.log(trainings)
    //postTrainings;
    putTrainings;


  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Carga" {...register("charge", { required: true, max: 200, min: 1, maxLength: 80 })} />
      <input type="number" placeholder="Repetições" {...register("movements", { max: 50, min: 2, maxLength: 100 })} />
      <input type="number" placeholder="Series" {...register("series", { max: 19, min: 1 })} />


      <input type="submit" />
    </form>
  );
}
