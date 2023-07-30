export const Timer = ({ timer, removeTimer }) => {
  const { hours, minutes, seconds, id } = timer

  return (
    <div className='text-js text-4xl font-semibold text-center shadow-shadow p-3 rounded-xl'>
      <div className='space-x-1 [&>span]:text-3xl'>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div>
        <button className='startBtn'>
          Start
        </button>
        <button className='deleteBtn' onClick={() => removeTimer(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}
