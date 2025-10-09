import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    let [input,SetInput]=   useState({
      email:"",
      passWord:""
    })
    let [data,SetData]=   useState(0)
    function fun1(e){
      let  {name,value}=    e.target
      SetInput({...input,[name]:value})
      console.log(input);
    }
    function showData(){
      SetData({...input});
    }
  return (
    <div>
      <input  type='email' name="email" onChange={fun1}  value={input.email} placeholder='Email'/>
      <br></br>
      <br></br>
      <input type='password'  name='passWord' value={input.passWord}  onChange={fun1} placeholder='passWord'/>
      <button onClick={showData}>Click</button>
      {/* <h1>{data.name}</h1> */}
      <h1>{data.email}</h1>
      <h1>{data.passWord}</h1>
      <Link  to={'/signup'} >  
    <button>go to the SignUp page</button>
    </Link>
    </div>
  )
}

export default Login