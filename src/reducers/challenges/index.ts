import base, { DuckInitialState, DuckTypes } from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'
import { getChallenges } from './sagas'
import produce from 'immer'

const initialState = {
  challenges: []
}

export type Counter = DuckInitialState & typeof initialState

export type Action = {
  payload: Counter;
  type: string;
}

export default base({
  namespace: 'crassa',
  store    : 'challenges',
  initialState
}).extend({
  selectors: ({ store }: DuckTypes) => ({
    getChallenges: (state: Counter) => state[store].challenges,
    getStatus    : (state: Counter) => state[store].status
  }),
  creators: ({ types }: DuckTypes) => ({
    getChallenges: () => ({ type: types.FETCH })
  }),
  reducer: (state: Counter, action: Action) => produce<Counter>(state, () => {
    switch (action.type) {
      default:
        return
    }
  }),
  sagas: {
    getChallenges
  },
  takes: ({ types, sagas }: DuckTypes) => [
    takeEvery(types.FETCH, sagas.getChallenges)
  ]
})
