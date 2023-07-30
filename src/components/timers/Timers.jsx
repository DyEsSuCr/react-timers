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
    <div className='flex flex-row justify-center gap-12 max-w-5xl mx-auto flex-wrap pb-16'>
      {timers.map((timer) => <Timer key={timer.id} timer={timer} removeTimer={deleteTimer} />)}
    </div>
  )
}
