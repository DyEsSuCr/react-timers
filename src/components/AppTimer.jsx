import { useState, useEffect } from 'react'

import { Clock } from './clock/Clock'
import { Form } from './form/Form'
import { Timers } from './timers/Timers'

export function AppTimer() {
  const [timers, setTimers] = useState([])

  // NOTE: Crea El LocalStorage
  useEffect(() => {
    const isLocalTimers = JSON.parse(localStorage.getItem('timers'))

    if (!isLocalTimers) {
      localStorage.setItem('timers', JSON.stringify(timers))
    } else {
      setTimers(isLocalTimers)
    }
  }, [])

  // NOTE: Guarda Timer en en localStorage
  const createTimer = (data) => {
    data.id = crypto.randomUUID()

    if (data.hours === '') data.hours = '00'
    if (data.minutes === '') data.minutes = '00'

    setTimers([...timers, data])
    localStorage.setItem('timers', JSON.stringify([...timers, data]))
  }

  return (
    <div className="min-h-screen w-full bg-primary text-white relative">
      <Clock />
      <Form createTimer={createTimer} />
      <Timers timers={timers} />
    </div>
  )
}
