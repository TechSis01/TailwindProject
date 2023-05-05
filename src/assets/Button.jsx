import React from 'react'

function Button({text,beauty}) {
  return (
    <button className={beauty}>{text}</button>
  )
}

export default Button