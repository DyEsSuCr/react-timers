import { Clock } from './components/clock/Clock'
import { Form } from './components/form/Form'
import { Timers } from './components/timers/Timers'

function App() {
  return (
    <div className="min-h-screen w-full bg-primary text-white relative">
      <Clock />
      <Form />
      <Timers />
    </div>
  )
}

export default App
