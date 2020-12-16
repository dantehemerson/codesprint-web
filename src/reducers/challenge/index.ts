import base, { DuckInitialState, DuckTypes } from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'
import { getChallenge } from './sagas'
import produce from 'immer'

const initialState = {
  challenge: []
}

export type Counter = DuckInitialState & typeof initialState

export type Action = {
  payload: Counter;
  type: string;
}

export default base({
  namespace: 'crassa',
  store    : 'challenge',
  initialState
}).extend({
  selectors: ({ store }: DuckTypes) => ({
    getChallenge: (state: Counter) => state[store].challenge,
    getStatus   : (state: Counter) => state[store].status
  }),
  creators: ({ types }: DuckTypes) => ({
    getChallenge: (challengeId: string) => ({ type: types.FETCH, challengeId })
  }),
  reducer: (state: Counter, action: Action, { types }: DuckTypes) => produce<Counter>(state, (draft) => {
    switch (action.type) {
      default:
        return
    }
  }),
  sagas: {
    getChallenge: getChallenge
  },
  takes: ({ types, sagas }: DuckTypes) => [
    takeEvery(types.FETCH, sagas.getChallenge)
  ]
})
