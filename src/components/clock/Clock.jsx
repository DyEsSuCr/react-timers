import { useState } from 'react'

export const Clock = () => {
  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [seconds, setSeconds] = useState(new Date().getSeconds())
  const [date, setDate] = useState(new Date().toDateString())

  setInterval(() => {
    setHours(new Date().getHours())
    setMinutes(new Date().getMinutes())
    setSeconds(new Date().getSeconds())
    setDate(new Date().toDateString())
  }, 1000)

  return (
    <div className="absolute top-12 left-12  p-3 text-center rounded-xl shadow-shadow text-js font-semibold">
      <span className="hour">{hours < 10 ? hours - 12 : `0${hours - 12}`}</span>
      <span>:</span>
      <span className="minutes">{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span>:</span>
      <span className="second">{seconds < 10 ? `0${seconds}` : seconds}</span>
      <span className="pl-1 ampm">{hours >= 0 && hours <= 6 ? 'a.m' : 'p.m'}</span>
      <h3 className="localdate">{date}</h3>
    </div>
  )
}
