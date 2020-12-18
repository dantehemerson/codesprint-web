import { Get } from 'lib/request'
import { DuckTypes } from 'reducers/base'
import { call, put } from 'redux-saga/effects'

export const getUser = ({ types }: DuckTypes) => function *({ userId }: any): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })

    const user = yield call(Get, `/users/${userId}`)

    yield put({
      type   : types.FETCH_FULFILLED,
      payload: {
        user
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
