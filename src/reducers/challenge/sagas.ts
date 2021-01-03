import { Get } from 'lib/request'
import { DuckTypes } from 'reducers/base'
import { call, put, select } from 'redux-saga/effects'
import userDucks from 'reducers/users'

const { getCookie } = userDucks.selectors

export const getChallenge = ({ types }: DuckTypes) => function *({ challengeId }: any): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })

    const tokenStore = yield select(getCookie)
    const challenge = yield call(Get, `/challenges/${challengeId}`, tokenStore)

    yield put({
      type   : types.FETCH_FULFILLED,
      payload: {
        challenge
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
