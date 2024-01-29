import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const[users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:2024/getAllUser");
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:2024/deleteUser/${id}`);
        loadUsers();
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Unique ID</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {
            users.map((user,index)=>{
             return(   
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/showuser/${user.id}`} className='btn btn-secondary mx-1'>Show</Link>
                    <Link to={`/editUser/${user.id}`} 
                    className='btn btn-primary mx-1'>Edit</Link>
                    <button className='btn btn-danger mx-1' onClick={()=>deleteUser(user.id)}>Remove</button>
                </td>
            </tr>)
            })          
        }
    </tbody>
</table>
</div>    
</div>
  )
}
