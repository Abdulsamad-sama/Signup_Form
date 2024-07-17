import React from 'react'
import Signupform from './Signupform'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({ userdata, setUserdata, postData }) => {

  

  const inputs = [
    {
      id: 1,
      name:"fullname",
      type: "text",
      placeholder: "Fullname",
      label: "Fullname:",
      errorMessage: "This should contain only letters",
      pattern: '^[A-Za-z]+$',
      required: true,
      focused: false
    },
    {
      id: 2,
      type: "text",
      name:"username",
      placeholder: "Username",
      label: "Username:",
      errorMessage: "This should contain 3 to 16 words and shouldn't inclde any special character",
      pattern:"^[a-zA-Z0-9_]{3,16}$",
      required: true,
      focused: false

    },
    {
      id: 3,
      type: "email",
      name:"email",
      placeholder: "Email",
      label: "Email:",
      errorMessage:"This is not a correct email",
      required: true,
      focused: false
    },
    {
      id: 4,
      type: "text",
      name:"password",
      placeholder: "Password",
      label: "Password:",
      errorMessage: "Password must be at least 8 characters and include a number, lowercase letter, uppercase letter, and special character",
      pattern:"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#\$%\^&*\)\(\-\+\=_{};':,\/?]).{8,}$",
      required: true,
      focused: false

    },
    {
      id: 5,
      type: "text",
      name:"confirmPassword",
      placeholder: "Confirm password",
      label: "Confirm password:",
      errorMessage: "Pasword does not match",
      pattern: userdata['password'],
      required: true,
      focused: false
    }
  ];
    
  
  const handleChange = (e) => setUserdata({...userdata, [e.target.name]: e.target.value});


  const handleSubmit = (e) =>(
    e.preventDefault(),
    postData
  );

  return (
    <div className='Signup'>
      <form 
      action="POST" 
      onSubmit={handleSubmit}
      className='signup_form'>
        <h1>Signup</h1>
          {inputs.map((input)=>(
          <Signupform 
          key={input.id} 
          {...input} 
          value= {userdata[input.name]}
          onChange={handleChange}/>
        ))}
        <button type='submit' onClick={handleSubmit}>Submit</button>
        <p>Already have an account? <Link to='/login'
          style={{
            color: 'red',
            textDecoration: 'underline'}}>Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp