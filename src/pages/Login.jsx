import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import {useDispatch} from "react-redux";
import { userLogin } from '../Actions/UserAction';

export default function Login() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('currentUser')){
      window.location.href="/"
    }
  },[])

  function login(){
    const user={
      email,
      pass
    }
     dispatch(userLogin(user))
  }
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className='text-center text-danger mt-3'>Register</h2>
            <div className='mt-3'>
            <input className='form-control mt-2' required="required" placeholder='email...' type="email" name ="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className='form-control mt-2' required="required" placeholder='password...' type="password" name ="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
            <div className="btn btn-danger mt-3 text-light" onClick={login}>Login</div>
            <p className='text-center'>You haven't Account Register first<a className='text-danger' href="/signup">Register</a></p>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

