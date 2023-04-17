export interface TrainingDataList {
  trainings: [{

    name: string,
    exercise: [{
      id: number,
      name: string,
      image: string,
      description: string
    }]
  }
  ]
}
