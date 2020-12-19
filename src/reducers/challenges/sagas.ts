import { Get } from 'lib/request'
import { DuckTypes } from 'reducers/base'
import { call, put, select } from 'redux-saga/effects'
import userDucks from 'reducers/users'

const { getCookie } = userDucks.selectors

export const getChallenges = ({  types }: DuckTypes) => function *(): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })

    const tokenStore = yield select(getCookie)
    const challenges = yield call(Get, '/challenges', tokenStore)

    yield put({
      type   : types.FETCH_FULFILLED,
      payload: {
        challenges
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
