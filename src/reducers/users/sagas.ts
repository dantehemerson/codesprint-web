
import Cookies from 'js-cookie'
import { Post } from 'lib/Request'
import { DuckTypes } from 'reducers/base'
import { call, put } from 'redux-saga/effects'
import { LoginRequestDto } from './types/login.request.dto'

export const login = ({ types }: DuckTypes) => function *({ payload }: { payload: LoginRequestDto}): Generator<any, any, any> {
  try {
    yield put({ type: types.POST_PENDING })

    const data = yield call(Post, '/users/login', payload)

    if(data?.jwt)
      Cookies.set('jwtToken', data.jwt)

    yield put({
      type   : types.LOGIN_SUCCESS,
      payload: {
        cookie: data.jwt
      }
    })
  } catch (e) {
    const { type, message, response: { data: { message: messageResponse } = { message: '' } } = {} } = e
    switch (type) {
      case 'cancel':
        yield put({ type: types.FETCH_CANCEL })
        break
      default:
        yield put({
          type : types.FETCH_FAILURE,
          error: messageResponse || message
        })
        break
    }
  }
}
