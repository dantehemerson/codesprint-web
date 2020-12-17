
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userDucks from 'reducers/user'
import { UserDto } from 'reducers/user/types/user.dto'

type Selector = {
  user: {
    user: UserDto
    status: string
  }
}

const {
  getUser,
  resetValues
} = userDucks.creators

export default function Profile({ match }: any) {
  const { params: { username } } = match
  const dispatch = useDispatch()

  const { user, status } = useSelector((state: Selector) => state.user)

  console.log('🤫 Dante ➤ Profile ➤ user', username)
  useEffect(() => {
    dispatch(getUser(username))

    return () => dispatch(resetValues())
  }, [])

  if(status === 'LOADING') return <div></div>

  return (
    <>
      <p>Mi Perfilllllllllllllllllll</p>
    </>
  )
}
