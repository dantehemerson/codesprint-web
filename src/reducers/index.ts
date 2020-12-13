import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router'
import { combineReducers, Reducer } from 'redux'
import { all } from 'redux-saga/effects'
import challenges from './challenges'

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

