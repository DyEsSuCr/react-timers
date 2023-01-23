import { useState, useEffect } from 'react'

export const Clock = () => {
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  return (
    <div className="absolute top-12 left-12  p-3 text-center rounded-xl shadow-shadow text-js font-semibold">
      <span className="hour">{hours}</span>
      <span>:</span>
      <span className="minutes">{minutes}</span>
      <span>:</span>
      <span className="second">{seconds}</span>
      <span className="pl-1 ampm">a.m</span>
      <h3 className="localdate">00/00/00</h3>
    </div>
  )
}
