import { useState } from 'react'

const Timer = () => {
  return (
    <div className="text-js text-4xl font-semibold text-center shadow-shadow p-3 rounded-xl">
      <div className="timer">
        <span className="text-3xl">00</span>
        <span className="text-3xl px-1">:</span>
        <span className="text-3xl">00</span>
        <span className="text-3xl px-1">:</span>
        <span className="text-3xl">00</span>
      </div>
      <div className="actions">
        <button
          className="text-lg font-medium text-white cursor-pointer p-1 duration-300
        hover:text-green"
        >
          Start
        </button>
        <button
          className="text-lg font-medium text-white cursor-pointer p-1 duration-300
        hover:text-red"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export const Timers = () => {
  return (
    <div className="flex flex-row justify-center gap-12 max-w-5xl mx-auto flex-wrap pb-16">
      <Timer />
    </div>
  )
}
