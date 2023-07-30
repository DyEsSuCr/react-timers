import { Clock } from './components/clock/Clock'
import { Form } from './components/form/Form'
import { Timers } from './components/timers/Timers'

export default function App () {
  return (
    <main className='main'>
      <Form />
      <Timers />
      <Clock />
    </main>
  )
}
