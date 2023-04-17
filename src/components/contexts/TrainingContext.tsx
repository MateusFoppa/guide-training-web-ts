import { createContext, ReactNode, useEffect, useState } from 'react'

import { getTrainings } from '../../services/api'




interface TrainingProviderProps {
  children: ReactNode
}

export const TrainingContext = createContext({} as any)

export function TrainingProvider({ children }: TrainingProviderProps) {
  const [trainings, setTrainings] = useState<any>([])


  useEffect(() => {
    ; (async () => {
      try {
        const TrainingRequest = await getTrainings()


        const requests = [TrainingRequest]

        const [
          { data: trainingResponse },
        ] = await Promise.all(requests)

        setTrainings(trainingResponse)
        console.log("Aqi")
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <TrainingContext.Provider value={{ trainings }}>
      {children}
    </TrainingContext.Provider>
  )
}
