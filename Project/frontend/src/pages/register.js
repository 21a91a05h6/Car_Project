import {useState} from "react";
import axios from "axios";
import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import './register.css'
const Auth=()=>{
    const[formdata,setFormdata]=useState({
        'firname':'',
        'lasass':'',
        'email':'',
        'DOB':'',
        'uname':'',
        'pass':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/registrations',{formdata}).then((result)=>{console.log(result.body)
        if(result.status==200){
            alert(result.data.msg)
            window.location.href = '/';
        }
        else{
            alert(result.data.msg)
        }
    })
    }
    return(
        <div className="back">
            <br/>
            <center>
            <h2 id="h1">Register</h2><br/>
            <form onSubmit={handlesubmit} className="form">
            <br/>
            <table>
            <tr>
                <td><label>First Name:</label></td>
                <input type="text" name="firname" placeholder="First Name" onChange={(e)=>setFormdata({...formdata,firname:e.target.value})}/></tr><br/>
                <tr>
                <td><label>Last Name:</label></td>
                <input type="text" name="lasname" placeholder="Last Name" onChange={(e)=>setFormdata({...formdata,lasname:e.target.value})}/></tr><br/>
                <tr>
                <td><label>Email:</label></td>
                <input type="text" name="email" placeholder="Email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/></tr><br/>
                <tr>
                <td><label>Date of Birth:</label></td>
                <input type="date" name="DOB"  onChange={(e)=>setFormdata({...formdata,DOB:e.target.value})}/></tr><br/>
            <tr>
                <td><label>Username:</label></td>
                <input type="text" name="uname" placeholder="Username" onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/></tr><br/>
                <tr>
                <td><label>Password:</label></td>
                <td><input type="text" name="pass" placeholder="Password" onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/></td></tr><br/>
                </table>
                <p><input type="submit" value="Sign Up" className="signin"/></p>
            </form>
            </center>
        </div>
    )
}
export default Auth;