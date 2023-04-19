import { NavLink } from "react-router-dom"
import { Container } from "./styles"
import { SelectTraining } from "../SelectTraining"

// import { TrainingContext } from "../../App"

import { useContext } from "react"
import { TrainingsProps } from "../../interface/TrainingsProps"

// const trainings = useContext(TrainingContext)

export function TopBar() {

  return <Container>
    <h1>GuideTraining</h1>
    <SelectTraining />
    <>
      <nav>
        <ul>
          <li>
            <button className="btn btn-secondary">
              <NavLink to='/statistics'>
                <span>Estatísticas</span>
              </NavLink>
            </button>
          </li>

        </ul>
      </nav>
    </>
  </Container >

}
