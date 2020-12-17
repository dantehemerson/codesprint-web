import base, { DuckInitialState, DuckTypes } from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'
import { getChallenge } from './sagas'
import produce from 'immer'

const initialState = {
  challenge: {}
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
    getChallenge: (challengeId: string) => ({ type: types.FETCH, challengeId }),
    resetValues : () => {console.log('Creatooooor', { type: types.RESET_VALUES })

      return ({ type: types.RESET_VALUES }) }
  }),
  reducer: (state: Counter, action: Action, { types,statuses  }: DuckTypes) => produce<Counter>(state, (draft) => {
    console.log('Ejecutando la acccionononononon,', action)
    switch (action.type) {
      case types.RESET_VALUES:
        draft.challenge = {}
        draft.status = statuses.NEW
        console.log('Reseteando el estado ', draft)

        return
      default:
        return
    }
  }),
  sagas: {
    getChallenge: getChallenge
  },
  takes: ({ types, sagas }: DuckTypes) => [
    takeEvery(types.FETCH, sagas.getChallenge)
  ],
  types: [
    'RESET_VALUES'
  ]
})
