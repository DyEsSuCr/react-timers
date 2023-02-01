import { Timer } from './Timer'

export const Timers = ({ timers }) => {
  return (
    <div className="flex flex-row justify-center gap-12 max-w-5xl mx-auto flex-wrap pb-16">
      {timers.length !== 0 && timers.map((timer) => <Timer key={timer.id} timer={timer} />)}
    </div>
  )
}
