import React from 'react'
import { Link } from 'react-router-dom'

export default function Navibar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg  navbar-light bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>User Management System</Link>
    {/* <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <Link className='btn btn-outline-dark' to="/addUser">
        Add User
    </Link>
    </div>
</nav>    
    </div>
  )
}
