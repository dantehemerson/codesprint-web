import { combineReducers, Reducer } from 'redux'
import { all } from 'redux-saga/effects'
import { connectRouter, RouterState, LocationChangeAction } from 'connected-react-router'

import challenges from './challenges'
console.log('🤫 Dante ➤ challenges', challenges)

export interface State {
  router: Reducer<RouterState, LocationChangeAction>,
  [propName: string]: any
}

export function* rootSaga(): Generator<any, any, any> {
  yield all([ ...challenges.takes ])
}

export default (history: any) => combineReducers({
  router            : connectRouter(history),
  [challenges.store]: challenges.reducer
})

