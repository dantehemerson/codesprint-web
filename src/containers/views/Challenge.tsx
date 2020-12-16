
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import challengeDucks from 'reducers/challenge'

type Selector = {
  challenge: {
  }
}

const {
  getChallenge
} = challengeDucks.creators

export default function Challenge({ match }: any) {
  const { params: { id } } = match
  console.log('🤫 Dante ➤ Challenge ➤ id', id)
  const dispatch = useDispatch()

  const { challenge } = useSelector((state: Selector) => state.challenge)

  useEffect(() => {
    dispatch(getChallenge('07dec0d2-5015-4682-aef8-b84b7bf80e0b'))
  }, [])

  return (
    <>
      <p>VIsta</p>
    </>
  )
}
