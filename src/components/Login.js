import React from 'react';
import Loginform from './Loginform';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = ({getData }) => {
  
  const navigate = useNavigate()

  const [values, setvalues] = useState({
    email: 'has@gmail.com56678890',
    password: 'Jok123456_' 
  });

  const inputs =[
  {
    id: 1,
    name: 'email',
    type: 'email',
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

const validateEmail = values["email"] === getData["email"]?
console.log('valid'):
console.log('invalid');


const validatePassword = 
values["password"] === getData["confirmPassword"]?
console.log('valid'):
console.log('invalid');

const onChange =(e)=>{
  setvalues({...values, [e.target.name]: e.target.value})
};

const handleSubmit =(e) =>(
  e.preventDefault(),
  ?validateEmail,
  validatePassword,
  navigate("/complete")
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
          <button type="submit" onClick={handleSubmit}>Login</button>
          <p>Don't have an account yet? <Link to ="/" 
            style={{
              color: 'red',
              textDecoration: 'underline' }}>Signup</Link>.</p>
        </form>
    </div>
  )
}

export default Login