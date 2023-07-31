import { Input } from './Input'
import { setLocal } from '../../utils/localStorageHandle'
import { TimerContext } from '../../context/timerContext'

import { useState, useContext } from 'react'

const initialForm = {
  id: null,
  hours: '',
  minutes: '',
  seconds: '',
  isRunning: false
}

export const Form = () => {
  const { timers, setTimers } = useContext(TimerContext)

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
    <section className='flex justify-center items-center flex-col gap-12 pt-52 pb-48 duration-300 md:pt-24'>
      <form className='px-1 py-4 bg-second rounded-xl shadow-shadow'>
        <h1 className='text-4xl font-semibold text-white uppercase text-center'>Timer</h1>

        <div className='py-7 max-w-max mx-auto flex text-js'>
          <Input name='hours' value={form.hours} myChange={(e) => handleChange(e)} />
          <Input name='minutes' value={form.minutes} myChange={(e) => handleChange(e)} />
          <Input name='seconds' value={form.seconds} myChange={(e) => handleChange(e)} />
        </div>

        <button className='addBtn' type='submit' onClick={handleSubmit}>
          Add
        </button>
      </form>
    </section>
  )
}
