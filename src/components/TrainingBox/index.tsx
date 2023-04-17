// import { TrainingList } from "../TrainingList"
//import { Container } from "./style"
import { Container } from "../../pages/Main/styles"


import { TrainingsProps } from "../../interface/TrainingsProps"



export function TrainingBox({ trainings }: TrainingsProps) {

  //Imprime o treino
  return (
    <Container>

      {/* <>
        <div className="box">
          <ul>
            <div className="training" key={trainings.name}>
              <li>{trainings.name}</li>

              {trainings.exercise.map((exercise) => (
                <div key={exercise.id}>
                  <li>{exercise.name}</li>
                  <li>{exercise.image}</li>
                  <li>{exercise.description}</li>
                </div>))}
            </div>
          </ul>

        </div>
      </> */}
    </Container >

  )
}
