import { useState } from 'react'

/**
 * This allows to do partial updates to state
 */
export function useObjectState<S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<Partial<S>>>] {
  const [ state, setState ] = useState(initialState)

  const setStatePartial = (newState: React.SetStateAction<Partial<S>>) => {
    if(typeof newState === 'function')
      setState(newState as any)
    else
      setState(prevState => ({
        ...prevState,
        ...newState
      }))
  }

  return [ state, setStatePartial ]
}
