import { Input } from './Input'
import { setLocal } from '../../utils/localStorageHandle'
import { TimerContext } from '../../context/timerContext'

import { useState, useContext } from 'react'

export const Form = () => {
  const { timers, setTimers } = useContext(TimerContext)

  const initialForm = {
    id: null,
    hours: '',
    minutes: '',
    seconds: ''
  }

  const [form, setForm] = useState(initialForm)

  const createTimer = (data) => {
    const maxTimers = 8

    if (timers.length > maxTimers) return window.alert('Many Timer')

    data.id = window.crypto.randomUUID()

    if (data.hours === '') data.hours = '00'
    if (data.minutes === '') data.minutes = '00'
    if (data.seconds === '') data.seconds = '00'

    setTimers([...timers, data])
    setLocal('timers', [...timers, data])
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.hours === '' && form.minutes === '' && form.seconds === '') return window.alert('ingresa los segundos')

    createTimer(form)
    setForm(initialForm)
  }

  return (
    <div className='flex justify-center items-center flex-col gap-12 pt-52 pb-48 duration-300 md:pt-24'>
      <form className='px-1 py-4 bg-second rounded-xl shadow-shadow'>
        <h1 className='text-4xl font-semibold text-white uppercase text-center'>Timer</h1>
        <div className='py-7  max-w-max mx-auto'>
          <Input
            name='hours'
            value={form.hours}
            myChange={(e) => {
              handleChange(e)
            }}
          />
          <span className='text-js text-5xl font-semibold text-center'>:</span>
          <Input
            name='minutes'
            value={form.minutes}
            myChange={(e) => {
              handleChange(e)
            }}
          />
          <span className='text-js text-5xl font-semibold text-center'>:</span>
          <Input
            name='seconds'
            value={form.seconds}
            myChange={(e) => {
              handleChange(e)
            }}
          />
        </div>
        <button
          className='text-base font-semibold bg-js text-black py-2 px-5 rounded-xl
          uppercase border-none block mx-auto duration-300 ease-in-out hover:bg-jsh'
          type='submit'
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  )
}
