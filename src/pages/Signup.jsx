import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import {userAction} from "../Actions/UserAction";
import {useDispatch} from "react-redux";


export default function Signup() {

  const dispatch = useDispatch();
  const [name,setName] =useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [cpass,setCpass] = useState("");

  function register(){
    if(pass !== cpass){
      alert("password not match.")
    }else{
      const user={
        name,
        email,
        pass
      }
      console.log(user);
      dispatch(userAction(user))
    }
  }
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className='text-center text-danger mt-3'>Regiter</h2>
            <div className='mt-3'>
            <input className='form-control mt-2' required="required" placeholder='name...' type="text" name ="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input className='form-control mt-2' required="required" placeholder='email...' type="email" name ="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className='form-control mt-2' required="required" placeholder='password...' type="password" name ="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
            <input className='form-control mt-2' required="required" placeholder='confirm password...' type="password" name ="cpass" value={cpass} onChange={(e)=>{setCpass(e.target.value)}} />
            <div className="btn btn-danger mt-3 text-light" onClick={register}>Regiter</div>
            <p className='text-center'>You have an Account <a className='text-danger' href="/login">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
