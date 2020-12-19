import { Challenge } from 'components/Challenge'
import { useComponentWillMount } from 'lib/hooks'
import React from 'react'
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
  const { challenges } = useSelector((state: Selector) => state.challenges)

  useComponentWillMount(() => {
    dispatch(getChallenges())
  })

  return (
    <div data-testid='counter'>
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
