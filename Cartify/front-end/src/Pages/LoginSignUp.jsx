import React, { useState } from 'react'
import './CSS/LoginSignup.css'

function LoginSignUp() {

  const [state , setState] = useState("Login");
  const [formData,setFormData] = useState({
        username : "",
        password : "",
        email : ""
  })

  const changeHandler = (e) => {
      setFormData({...formData,[e.target.name] : e.target.value})
  }

  const login = async () => {
    console.log("Login function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method : 'POST',
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token' , responseData.token);
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Sign Up function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method : 'POST',
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token' , responseData.token);
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
            {state==="Sign Up" ? <input onChange={changeHandler} name="username" value={formData.username} type="text" placeholder='Your Name'/> : <></>}
            <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
            <input name='password' value={formData.passeord} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
        {state==="Sign Up" ? <p className='loginsignup-login'>Already have an account ? <span onClick={() => {setState("Login")}}>Login here</span> </p>
        : <p className='loginsignup-login'>Create an account <span onClick={() => {setState("Sign Up")}}>Click here</span> </p> }
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing  , i  agree to terms of use and privacy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp