import { NavLink, useParams } from "react-router-dom"
import { Container } from "./styles"

import { useContext } from "react"

import { TrainingContext } from "../contexts/TrainingContext"
import { TrainingsProps } from "../../interface/TrainingsProps"


export function SelectExercise() {

  const params: any = useParams();
  const { trainings } = useContext(TrainingContext)

  const training = trainings.filter((training: TrainingsProps) => training._id == params._id);

  console.log(training[0].exercise);
  //const exercise = training[0].exercise;

  return (
    <Container>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>Meus Exercicios</span>
        </button>

        <ul className="dropdown-menu">


          {/* imprimir todos os treinos com map */}
          {trainings.map((training: any) => {
            const exercise: any = training[0].exercise;
            {
              Array.isArray(exercise) ? exercise.map((tr) => {
                return (
                  <li key={tr._id}>
                    <NavLink to={`/exercise/${tr.id}`} className="dropdown-item">
                      <span>{tr.name}</span>
                    </NavLink>
                  </li >
                )
              }) : null
            }
          })}
          <li>
            <NavLink to='/new-training' className="dropdown-item">
              <span>Adicionar Exercicio</span>
            </NavLink>
          </li>

        </ul>

      </div>

    </Container >
  )
}
