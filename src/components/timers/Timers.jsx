import { Timer } from './Timer'
import { TimerContext } from '../../context/timerContext'
import { setLocal } from '../../utils/localStorageHandle'

import { useContext } from 'react'

export const Timers = () => {
  const { timers, setTimers } = useContext(TimerContext)

  const deleteTimer = (id) => {
    const confirmDelete = window.confirm(`¿Delete timer with id:${id}?`)

    if (!confirmDelete) return

    const newTimers = timers.filter((timer) => timer.id !== id)

    setTimers(newTimers)
    setLocal('timers', newTimers)
  }

  return (
    <section className='timers'>
      {timers.map((timer) => <Timer key={timer.id} timer={timer} removeTimer={deleteTimer} />)}
    </section>
  )
}
