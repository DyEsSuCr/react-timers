import { useState, useEffect } from 'react'

export const Timer = ({ timer, removeTimer }) => {
  const [time, setTime] = useState(timer)

  useEffect(() => {
    let intervalId

    if (time.isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          let newSegundo = prevTime.seconds - 1
          let newMinuto = prevTime.minutes
          let newHora = prevTime.hours

          if (newSegundo === -1) {
            newSegundo = 59
            newMinuto -= 1
          }

          if (newMinuto === -1) {
            newMinuto = 59
            newHora -= 1
          }

          return { hours: newHora, minutes: newMinuto, seconds: newSegundo, isRunning: prevTime.isRunning }
        })
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [time.isRunning])

  const handleStart = () => setTime(prevTime => ({ ...prevTime, isRunning: true }))
  const handleStop = () => setTime(prevTime => ({ ...prevTime, isRunning: false }))

  return (
    <div className='text-js text-4xl font-semibold text-center shadow-shadow p-3 rounded-xl'>
      <div className='[&>span]:text-3xl'>
        <span className='pointsTimer'>{String(time.hours).padStart(2, '0')}</span>
        <span className='pointsTimer'>{String(time.minutes).padStart(2, '0')}</span>
        <span className='pointsTimer'>{String(time.seconds).padStart(2, '0')}</span>
      </div>

      <div>
        {!time.isRunning && <button className='startBtn' onClick={handleStart}>Start</button>}
        {time.isRunning && <button className='deleteBtn' onClick={handleStop}>Stop</button>}
        <button className='deleteBtn' onClick={() => removeTimer(timer.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}
