import { useState } from 'react'

export const Form = () => {
  const addTimer = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center items-center flex-col gap-12 pt-24 pb-48">
      <form className="px-1 py-4 bottom-3 bg-second rounded-xl shadow-shadow relative">
        <h1 className="text-4xl font-semibold text-white uppercase text-center">Timer</h1>
        <div className="py-7  max-w-max mx-auto">
          <input className="text-js text-5xl font-bold text-center w-20" type="number" placeholder="00" />
          <span className="text-js text-5xl font-semibold text-center">:</span>
          <input className="text-js text-5xl font-bold text-center w-20" type="number" placeholder="00" />
          <span className="text-js text-5xl font-semibold text-center">:</span>
          <input className="text-js text-5xl font-bold text-center w-20" type="number" placeholder="00" />
        </div>
        <button
          className="text-base font-semibold bg-js text-black py-2 px-5 rounded-xl
          uppercase border-none block mx-auto duration-300 ease-in-out hover:bg-jsh"
          onClick={addTimer}
        >
          Add
        </button>
      </form>
    </div>
  )
}
