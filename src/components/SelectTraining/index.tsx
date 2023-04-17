import { NavLink } from "react-router-dom"
import { Container } from "./styles"
import { TrainingDataList } from "../../interface/TrainingDataList"
import { TrainingData } from "../../interface/TrainingData"
import { useContext } from "react"

import { TrainingContext } from "../contexts/TrainingContext"

export function SelectTraining() {

  const { trainings } = useContext(TrainingContext)
  //console.log(trainings)

  // trainings.map((tr: any) => {
  //   console.log(tr.name)

  // })

  return (
    <Container>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>Meus Treinos</span>
        </button>

        <ul className="dropdown-menu">
          <li>
            <NavLink to='/' className="dropdown-item" >
              <span>Meus Treinos</span>
            </NavLink>
          </li>

          {/* imprimir todos os treinos com map */}
          {trainings.map((tr: any) => {
            return (
              <li key={tr._id}>
                <NavLink to={`/training/${tr._id}`} className="dropdown-item">
                  <span>{tr.name}</span>
                </NavLink>
              </li >)
          })}

          <li>
            <NavLink to='/new-training' className="dropdown-item">
              <span>Novo Treino</span>
            </NavLink>
          </li>

        </ul>

      </div>

    </Container >
  )
}
