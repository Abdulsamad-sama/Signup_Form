import React from 'react'

const Loginform = (props) => {

    const {label, ...inputsprops } = props;

  return (
    <div>
        <label>{label}</label>
        <input {...inputsprops}/>
    </div>
  )
};

export default Loginform