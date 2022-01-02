import React from 'react'
import '../styles/Input.css'

const Input = ({label, ...rest}) => {
  return (
    <div className="field">
      <div >
        <label htmlFor="">{label}</label>
      </div>
      <input {...rest}/>
    </div>
  )
}

export default Input
