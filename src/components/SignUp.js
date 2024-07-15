import React from 'react'
import { useState } from 'react'
import Signupform from './Signupform'
import { Link } from 'react-router-dom'

const SignUp = ({userdata, handleSubmit, handleChange, inputs }) => {
  
  return (
    <div className='Signup'>
      <form 
      action="POST" 
      onSubmit={(e)=>(e.preventDefault, handleSubmit)}
      className='signup_form'>
        <h1>Signup</h1>
          {inputs.map((input)=>(
          <Signupform 
          key={input.id} 
          {...input} 
          value= {userdata[input.name]}
          onChange={handleChange}/>
        ))}
        <button
          type='submit'
          // onClick={handleSubmit}
          >
            Submit
        </button>
        <p>Already have an account? <Link to='/login'
          style={{
            color: 'red',
            textDecoration: 'underline'}}>Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp