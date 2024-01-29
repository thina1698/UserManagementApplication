import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

export default function Adduser() {

    let navigate=useNavigate();

    const [user,setUser]=useState({
        userName:"",
        passWord:"",
        email:""
    });

    const {userName,passWord,email}=user;

    const onInputChange=(event)=>{
        setUser({...user, [event.target.name]:event.target.value})
    }

    const onSubmit=async(event)=>{
        event.preventDefault();
        await axios.post("http://localhost:2024/addUser",user);
        navigate("/");
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Registration Form</h2>
<form onSubmit={(event)=>{onSubmit(event)}}>
                <div className='mb-3'>
                    <label htmlFor='User Name'className='form-label'>User Name</label>
                    <input type={'text'} className='form-control' placeholder='Enter Your Username' name='userName' value={userName} onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Password'className='form-label'>Password</label>
                    <input type={'password'} className='form-control' placeholder='Enter Your Password' name='passWord' value={passWord} onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor={'Email'} className='form-label'>Email</label>
                    <input type='text' className='form-control' placeholder='Enter Your E-mail' name='email' value={email} onChange={(event)=>onInputChange(event)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
</form>
            </div>
        </div>
    </div>
  )
}
