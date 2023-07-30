import { createContext, useEffect, useState } from 'react'
import { setLocal } from '../utils/localStorageHandle'

export const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([])
  const initialValues = JSON.parse(window.localStorage.getItem('timers'))

  useEffect(() => {
    if (!initialValues) setLocal('timers', timers)
    else setTimers(initialValues)
  }, [])

  return <TimerContext.Provider value={{ timers, setTimers }}>{children}</TimerContext.Provider>
}
