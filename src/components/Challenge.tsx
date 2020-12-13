import React from 'react'
import { ChallengeDto } from 'reducers/challenges/types/challenge.type'

type ChallengeProps = {
  challenge: ChallengeDto
}

export function Challenge({ challenge }: ChallengeProps) {
  return (
    <div>
      asd
      <h3>{challenge.title}</h3>
      <img src={challenge.thumbnail} />
    </div>
  )
}

