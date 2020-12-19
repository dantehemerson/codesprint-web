
import base, { DuckInitialState, DuckTypes } from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'
import { login } from './sagas'
import produce from 'immer'
import { LoginRequestDto } from './types/login.request.dto'

const initialState = {
  cookie: null
}

export type Counter = DuckInitialState & typeof initialState

export type Action = {
  payload: Counter;
  type: string;
}

export default base({
  namespace: 'crassa',
  store    : 'users',
  initialState
}).extend({
  selectors: ({ store }: DuckTypes) => ({
    getCookie: (state: Counter) => state[store].cookie
  }),
  creators: ({ types }: DuckTypes) => ({
    login    : (payload: LoginRequestDto) => ({ type: types.POST, payload }),
    setCookie: (payload: { cookie: string }) => ({ type: types.SET_COOKIE, payload })
  }),
  reducer: (state: Counter, action: Action, { types }: DuckTypes) => produce<Counter>(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        draft.cookie = action.payload.cookie
        draft.status = 'USER_AUTHENTICATED'

        return
      case types.REHYDRATE_AUTH:
        draft.cookie = action.payload.cookie

        return
      case types.SET_COOKIE:
        draft.cookie = action.payload.cookie

        return
      default:
        return
    }
  }),
  sagas: {
    login
  },
  takes: ({ types, sagas }: DuckTypes) => [
    takeEvery(types.POST, sagas.login)
  ],
  types: [
    'LOGIN_SUCCESS',
    'REHYDRATE_AUTH',
    'SET_COOKIE'
  ]
})
