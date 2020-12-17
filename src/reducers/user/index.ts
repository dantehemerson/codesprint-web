import base, { DuckInitialState, DuckTypes } from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'
import { getUser } from './sagas'
import produce from 'immer'

const initialState = {
  user: {}
}

export type Counter = DuckInitialState & typeof initialState

export type Action = {
  payload: Counter;
  type: string;
}

export default base({
  namespace: 'crassa',
  store    : 'user',
  initialState
}).extend({
  selectors: ({ store }: DuckTypes) => ({
    getUser  : (state: Counter) => state[store].user,
    getStatus: (state: Counter) => state[store].status
  }),
  creators: ({ types }: DuckTypes) => ({
    getUser    : (userId: string) => ({ type: types.FETCH, userId }),
    resetValues: () => ({ type: types.RESET_VALUES })
  }),
  reducer: (state: Counter, action: Action, { types,statuses  }: DuckTypes) => produce<Counter>(state, (draft) => {
    switch (action.type) {
      case types.RESET_VALUES:
        draft.user = {}
        draft.status = statuses.NEW

        return
      default:
        return
    }
  }),
  sagas: {
    getUser
  },
  takes: ({ types, sagas }: DuckTypes) => [
    takeEvery(types.FETCH, sagas.getUser)
  ],
  types: [
    'RESET_VALUES'
  ]
})
