
import { useForm } from 'react-hook-form';

import MyPatch from '../../services/MyPatch';
import { putTrainings } from '../../services/api';

export function TrainingForm(training: any, id: any) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {


    console.log(data);


    TrainingPut(data);
  }
  console.log(errors);
  //console.log(training.training)
  const exe = training.training;

  function TrainingPut(data: any) {

    // const exercise: any = {
    //   movements: data.movements,
    //   charge: data.charge,
    //   series: data.series
    // }

    exe[0].exercise = {
      movements: data.movements,
      charge: data.charge,
      series: data.series
    }

    console.log(JSON.stringify(exe))

    MyPatch(JSON.stringify(exe));
    //putTrainings(data)
    // postTrainings(exe);

    //   name: "Treino Alterado2",
    //   exercise: [
    //     {
    //       id: 3,
    //       name: "Supino Inclinado com Barra",
    //       image: "./supino-inclinado-com-barra.jpg",
    //       description: "Músculos Recrutados:/bPeitoral Superior./bPeitoral Medial./bDeltoide Anterior./bTríceps./bDeite-se no banco inclinado para supino./b Posicione as mãos um palmo além da largura dos ombros./b Tire a barra do suporte./b Desça ela em direção ao peitoral superior./b Empurre para cima em direção reta.",
    //       movements: 12,
    //       charge: 50,
    //       series: 40
    //     },
    //     {
    //       "id": "1",
    //       "name": "Supino Low Incline com Halteres",
    //       "image": "./supino-low-incline-com-halteres.jpg",
    //       "description": "Músculos Recrutados: /b Peitoral Superior (com maior ênfase)./b Peitoral Médio. /b Tríceps. Deltoide Anterior./bConfigure o banco inclinável do supino em 30 graus./bDeite-se no aparelho e posicione os pés no chão, conforme a largura dos ombros./bPegue os halteres, para isso, traga-os até os joelhos e use-os como impulsão, para que se traga com maior segurança os pesos a posição inicial./bPosicione os halteres na linha da clavícula./bDesça-os próximo ao peitoral superior./bEmpurre os pesos para cima."
    //     }
    //   ],

    // })
    //   .then(res => console.log(res));
    // return (
    //   alert("Teste put com API Axios")


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
