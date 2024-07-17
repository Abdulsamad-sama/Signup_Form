import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {

  const [userdata,setUserdata] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
