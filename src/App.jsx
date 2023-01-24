import { Clock } from './components/clock/Clock'
import { Form } from './components/form/Form'

function App() {
  return (
    <div className="min-h-screen w-full bg-primary text-white relative">
      <Clock />
      <Form />
    </div>
  )
}

export default App
