
import FooterSmall from 'components/Footer/Footer'
import { useObjectState } from 'lib/hooks/use-object-state.hook'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usersDucks from 'reducers/users'

type Selector = {
  users: {
    cookie: string
    status: string
  }
}

const {
  login
} = usersDucks.creators

export default function Challenge({ match }: any) {
  const { params: { id } } = match
  console.log('🤫 Dante ➤ Challenge ➤ id', id)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [])

  return (
    <>
      <p>VIsta</p>
    </>
  )
}
