import React from 'react'

const Button = ({children,handeler}) => {
  return (
    <button
    className="bg-red-400 text-white px-3 py-2 rounded shadow"
    onClick={handeler}
  >
    {children}
  </button>
  )
}

export default Button