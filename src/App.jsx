import { useState, useEffect } from 'react'

import { Clock } from './components/clock/Clock'
import { Form } from './components/form/Form'
import { Timers } from './components/timers/Timers'

function App() {
  useEffect(() => {
    !localStorage.getItem('timer') && localStorage.setItem('timers', JSON.stringify([]))
  }, [])

  const [timers, setTimers] = useState(JSON.parse(localStorage.getItem('timers')))

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

export default App
