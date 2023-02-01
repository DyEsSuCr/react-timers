import { useState, useEffect } from 'react'

import { Clock } from './clock/Clock'
import { Form } from './form/Form'
import { Timers } from './timers/Timers'

export function AppTimer() {
  const [timers, setTimers] = useState([])

  const isLocalTimers = JSON.parse(localStorage.getItem('timers'))

  // NOTE: Crea El LocalStorage
  useEffect(() => {
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
    if (data.seconds === '') data.seconds = '00'

    setTimers([...timers, data])
    localStorage.setItem('timers', JSON.stringify([...timers, data]))
  }

  // NOTE: Elimina Timer
  const deleteTimer = (id) => {
    const acceptDel = window.confirm(`¿Delete timer with id:${id}?`)

    if (acceptDel) {
      let newTimers = isLocalTimers.filter((timer) => timer.id !== id)

      setTimers(newTimers)
      localStorage.setItem('timers', JSON.stringify(newTimers))
    } else {
      return
    }
  }

  return (
    <div className="min-h-screen w-full bg-primary text-white relative">
      <Clock />
      <Form createTimer={createTimer} />
      <Timers timers={timers} delTimer={deleteTimer} />
    </div>
  )
}
