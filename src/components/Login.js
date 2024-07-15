import React from 'react';
import Loginform from './Loginform';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [values, setvalues] = useState({
    email: '',
    password: '' 
  });

  const inputs =[
  {
    id: 1,
    name: 'email',
    type: 'text',
    placeholder: 'Username/ Email',
    label: 'Username/ Email',
    required: true
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    required: true
  }
];

const onChange =(e)=>{
  setvalues({...values, [e.target.name]: e.target.value})
}

const handleSubmit =(e) =>(
  e.preventdefault()
);

  return (
    <div className='Login'>
        <form 
        action="POST"
        className='login_form'>
          <h1>Login</h1>
          {inputs.map((input)=>(
            <Loginform 
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange ={onChange} />
          ))}
          <button type="submit" onClick={handleSubmit}></button>
          <p>Don't have an account yet? <Link to ="/" 
            style={{
              color: 'red',
              textDecoration: 'underline' }}>Signup</Link>.</p>
        </form>
    </div>
  )
}

export default Login