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

  useEffect(() => {
    dispatch(getChallenges())
  }, [])

  return (
    <div data-testid='counter'>
      <p>Challenges {c}</p>
      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {
              challenges.map(challenge => (
                <div className='p-4 md:w-1/3' key={challenge.id}>
                  <Challenge challenge={challenge} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
