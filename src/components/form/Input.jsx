export const Input = ({ name, value, myChange }) => {
  return (
    <input
      className="text-js text-5xl font-bold text-center w-20"
      type="number"
      name={name}
      placeholder="00"
      onChange={myChange}
      value={value}
    />
  )
}
