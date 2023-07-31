export const Timer = ({ timer, removeTimer }) => {
  const { hours, minutes, seconds, id } = timer

  return (
    <div className='text-js text-4xl font-semibold text-center shadow-shadow p-3 rounded-xl'>
      <div className='[&>span]:text-3xl'>
        <span className='pointsTimer'>{hours}</span>
        <span className='pointsTimer'>{minutes}</span>
        <span className='pointsTimer'>{seconds}</span>
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
