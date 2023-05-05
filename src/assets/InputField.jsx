import React from 'react'

function InputField({type,placeholder,beautyInput,beautyContainer}) {
  return (
    <div className={beautyContainer}>
        <input type={type} placeholder={placeholder} className={beautyInput}></input>
    </div>
  )
}

export default InputField