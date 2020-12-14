import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router'
import { combineReducers, Reducer } from 'redux'
import { all } from 'redux-saga/effects'
import challenges from './challenges'
import users from './users'

export interface State {
  router: Reducer<RouterState, LocationChangeAction>,
  [propName: string]: any
}

export function* rootSaga(): Generator<any, any, any> {
  yield all([ ...challenges.takes, ...users.takes ])
}

export default (history: any) => combineReducers({
  router            : connectRouter(history),
  [challenges.store]: challenges.reducer,
  [users.store]     : users.reducer
})

