import { Link } from 'react-router-dom';
import React, { Component }  from 'react';
import './admindashboard.css';
import Overview from './overview';
function Dashboard(){
    const username = localStorage.getItem('username');
    return(
        <>
            {/* <h1 style={{textAlign:"center"}}>Admin Dashboard</h1> */}
<div class="sidebar">
  <a class="active" href="#home">Dasboard</a>
  <a href="#overview">Overview</a>
  {/* <Link to='/overview'>Overview</Link> */}
  {/* <a href="#contact">Contact</a>
  <a href="#about">About</a> */}
  <Link to='/alogout'>Logout</Link>
  <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> {username}
                </Link>
</div>

<div class="content">
  ..
</div>
<div id='overview'>
<Overview/>
</div>
        </>
    )
}
export default Dashboard;