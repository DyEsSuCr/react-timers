import { useState, useEffect } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const isMorning = time.getHours() >= 0 && time.getHours() <= 6
  const amPm = isMorning ? 'a.m' : 'p.m'

  return (
    <div className='absolute top-12 left-0 right-0 p-3 mx-auto text-center rounded-xl shadow-shadow text-js font-semibold max-w-max duration-300 md:left-12 md:mx-0'>
      <div className='space-x-1'>
        <span>{formattedTime}</span>
        <span>{amPm}</span>
      </div>
      <h3>{time.toLocaleDateString()}</h3>
    </div>
  )
}
