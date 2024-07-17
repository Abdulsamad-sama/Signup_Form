import React from 'react'
import { useState } from 'react'

const Forminputs = (props) => {
  const { label, onChange, errorMessage, ...userdataprops } = props

  const [focused,setFocused] = useState(false);

  const handleFocused =(e)=>{
    setFocused(true)
  }

  return (
    <div className= "Forminputs">
      <label htmlFor={label}>{label}</label>
      <input {...userdataprops} onChange={onChange} onBlur={handleFocused} focused= {focused.toString()} />
      <span>{errorMessage}</span>
    </div>
    
  )
}

export default Forminputs