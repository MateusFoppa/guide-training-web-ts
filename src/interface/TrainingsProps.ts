import { ReactNode } from "react";
import { TrainingData } from "./TrainingData";


export interface TrainingsProps {
  exercise: any;
  // eslint-disable-next-line @typescript-eslint/ban-types
  _id: Object;
  name: ReactNode | ((props: { isActive: boolean; isPending: boolean; }) => ReactNode),
  trainings: [{
    id: {
      type: number,
      require: true
    }
    name: {
      type: string,
      require: true
    },
    exercise: {
      image: {
        type: string,
        require: false
      }
      charge: {
        type: number,
        require: false
      }
      movements: {
        type: number,
        require: false
      }
      description: {
        type: string,
        require: false
      }
    }
  }
  ]

}
