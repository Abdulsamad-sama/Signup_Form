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
      <label >{label}</label>
      <input {...userdataprops} onChange={onChange} onFocus={handleFocused} Focused= {focused.toString} />
      <span>{errorMessage}</span>
    </div>
    
  )
}

export default Forminputs