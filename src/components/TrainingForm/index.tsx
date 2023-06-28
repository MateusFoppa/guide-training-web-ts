import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TrainingContext } from '../contexts/TrainingContext'
import { Container } from './style'

export function TrainingForm() {
  const { trainings } = useContext(TrainingContext)

  const { _id } = useParams()

  //States do Form
  const [moviments, setMoviments] = useState('')
  const [serie, setSerie] = useState('')
  const [charge, setCharge] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    // Aqui você pode fazer algo com os valores do movimento, série e charge
    console.log('Moviments:', moviments)
    console.log('Série:', serie)
    console.log('Charge:', charge)

    console.log(_id)

    console.log(trainings)

    const filteredExercises = trainings[0].exercise.filter((item: any) => item._id === _id)

    if (filteredExercises.length > 0) {
      filteredExercises[0].charge = charge
      filteredExercises[0].movements = moviments
      filteredExercises[0].series = serie

      console.log(filteredExercises[0])

      // Limpar os campos do formulário
      setMoviments('')
      setSerie('')
      setCharge('')
    }
  }

  return (
    <Container>
      <div className='box'>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label>
              Movimentos:
              <input
                type='number'
                value={moviments}
                onChange={(e) => setMoviments(e.target.value)}
              />
            </label>

            <label>
              Séries:
              <input type='number' value={serie} onChange={(e) => setSerie(e.target.value)} />
            </label>

            <label>
              Carga:
              <input type='number' value={charge} onChange={(e) => setCharge(e.target.value)} />
            </label>

            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    </Container>
  )
}
