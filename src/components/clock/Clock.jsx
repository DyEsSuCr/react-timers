import { useState } from 'react'

export const Clock = () => {
  const [clock, setclock] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    date: new Date().toLocaleDateString(),
  })

  setInterval(() => {
    setclock({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      date: new Date().toLocaleDateString(),
    })
  }, 1000)

  return (
    <div className="absolute top-12 left-0 right-0 p-3 mx-auto text-center rounded-xl shadow-shadow text-js font-semibold max-w-max duration-300 md:left-12 md:mx-0">
      <span className="hour">{clock.hours}</span>
      <span>:</span>
      <span className="minutes">{clock.minutes < 10 ? `0${clock.minutes}` : clock.minutes}</span>
      <span>:</span>
      <span className="second">{clock.seconds < 10 ? `0${clock.seconds}` : clock.seconds}</span>
      <span className="pl-1 ampm">{clock.hours >= 0 && clock.hours <= 6 ? 'a.m' : 'p.m'}</span>
      <h3 className="localdate">{clock.date}</h3>
    </div>
  )
}
