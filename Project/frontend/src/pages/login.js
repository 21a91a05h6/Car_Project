import {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component }  from 'react';
import './login.css'
const Auth=()=>{
    const[formdata,setFormdata]=useState({
        'uname':'',
        'pass':'',
    })

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/auth',formdata).then((result)=>{console.log(result.body)
        if(result.status==200){
            //alert(result.data.msg)
            window.location.href = '/home';
            localStorage.setItem('username', result.data.reg);
        }
        else{
            alert(result.data.msg)
        }
    })
    }
    return(
        <div className="lback">
            <br/>
            <center>
            <h2 id="h1">Good to see you again</h2><br/>
            <form onSubmit={handlesubmit} className="lform">
            <br/><br/>
            <table>
            <tr>
                <td><label>Username:</label></td>
                <input type="text" name="uname" placeholder="Username" onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/></tr><br/><br/>
                <tr>
                <td><label>Password:</label></td>
                <td><input type="text" name="pass" placeholder="Password" onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/></td></tr><br/><br/>
                </table>
                <p><input type="submit" value="Sign In" className="signup"/></p>
                <p><Link to="/register" style={{color:'white'}}>Don't have an account ?</Link></p>
            </form>
            </center>
        </div>
    )
}
export default Auth;