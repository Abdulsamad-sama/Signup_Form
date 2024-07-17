import SignUp from './components/SignUp';
import Login from './components/Login';
import Complete from './components/Complete';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {

  const [userdata,setUserdata] = useState({
    fullname: "",
    username: "",
    email: "has@gmail.com",
    password: "",
    confirmPassword: "Jok123456_"
  });

  const postData = localStorage.setItem('userData', JSON.stringify(userdata));  
  const getData = JSON.parse(localStorage.getItem('userData'))
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
          path='/' 
          element={<SignUp
            userdata={userdata}
            setUserdata={setUserdata}
            postData={postData}/>}
          />
          <Route
          path='/login'
          element={<Login
          getData={getData}/>} 
          />
          <Route
          path='/complete'
          element ={<Complete/>}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
