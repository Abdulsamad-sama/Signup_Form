import SignUp from './components/SignUp';
import Login from './components/Login';
// import Header from './Header';
// import Footer from './Footer';
// import Home from './Home';
import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"


function App() {


  const [userdata,setUserdata] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

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

  const storeData=localStorage.setItem('userData', JSON.stringify(userdata))
  const getData = JSON.parse(localStorage.getItem('userData'))
  console.log(getData)
  
  const handleSubmit = (e) =>(
    e.preventDefault(),
    storeData
  );


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
          path='/' 
          element={<SignUp
            userdata={userdata}
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit= {handleSubmit}/>}
          />
          <Route
          path='/login'
          element={<Login
          getData={getData}/>} 
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
