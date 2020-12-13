import { Challenge } from 'components/Challenge'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import challengeDucks from 'reducers/challenges'

const { getChallenges } = challengeDucks.creators

interface Selector {
  challenges: {
    challenges: any[]
  }
}

export default () => {
  const dispatch = useDispatch()
  const [ c, setC ] = useState(1)
  const { challenges } = useSelector((state: Selector) => state.challenges)

  console.log('🤫 Dante ➤ challenges', challenges)
  useEffect(() => {
    dispatch(getChallenges())
  }, [])

  return (
    <div data-testid='counter'>
      <p>Challenges {c}</p>
      <button onClick={() => setC(c + 1)}>lkl</button>
      {
        challenges.map(challenge => <Challenge challenge={challenge} key={challenge.id} />)
      }
    </div>
  )
}
