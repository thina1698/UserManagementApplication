import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Viewuser() {
const [user,setUser]=useState({
    userName:"",
    passWord:"",
    email:""
})

const {id}=useParams();

useEffect(()=>{
    loadUser();
},[])

const loadUser=async()=>{
    const result=await axios.get(`http://localhost:2024/getById/${id}`);
    setUser(result.data);
}

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Information</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of Selected User ID:{user.id}
                        <ul className='list-group-flush'>
                            <li className='list-group-item'>
                                <b>UserName:</b>
                                {user.userName}
                            </li> 
                            <li className='list-group-item'>
                                <b>Password:</b>
                                {user.passWord}
                            </li> 
                            <li className='list-group-item'>
                                <b>E-mail:</b>
                                {user.email}
                            </li>  
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back to Homepage</Link>
            </div>
        </div>
    </div> 
  )
}
