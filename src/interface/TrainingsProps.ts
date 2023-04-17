import { ReactNode } from "react";
import { TrainingData } from "./TrainingData";


export interface TrainingsProps {
  _id: Object;
  name: ReactNode | ((props: { isActive: boolean; isPending: boolean; }) => ReactNode),
  trainings: [{
    id: {
      type: Number,
      require: true
    }
    name: {
      type: String,
      require: true
    }
    image: {
      type: String,
      require: false
    }
    charge: {
      type: Number,
      require: false
    }
    movements: {
      type: Number,
      require: false
    }
    description: {
      type: String,
      require: false
    }
  }
  ]

}
