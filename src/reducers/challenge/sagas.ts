import { Get } from 'lib/request'
import { DuckTypes } from 'reducers/base'
import { call, put } from 'redux-saga/effects'

export const getChallenge = ({ types }: DuckTypes) => function *({ challengeId }: any): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })

    const challenge = yield call(Get, `/challenges/${challengeId}`)

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
