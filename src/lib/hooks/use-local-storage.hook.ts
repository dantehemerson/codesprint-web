import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T):  [T, Dispatch<SetStateAction<T>>] {
  const [ state, setState ] = useState<T>(() => {
    try {
      const localValue = window.localStorage.getItem(key)

      return localValue ? JSON.parse(localValue) : defaultValue
    } catch (e) {
      return defaultValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, state as any)
  }, [ state ])

  return [ state, setState ]
}
