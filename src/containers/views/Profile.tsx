
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

  useEffect(() => {
    dispatch(getUser(username))

    return () => dispatch(resetValues())
  }, [])

  if(status === 'LOADING') return <div></div>

  return (
    <div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>
      <div className='flex flex-start mb-10 w-full border-4 border-light-blue-500 border-opacity-100 br'>
        <div className='w-1/4 p-10'>
          <img alt='hero' className='w-28 h-28 object-cover m-0 rounded-full' src={user.avatar} />
        </div>
        <div className='p-10'>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </div>
      </div>
    </div>
  )
}
