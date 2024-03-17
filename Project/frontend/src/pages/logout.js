import { useEffect } from "react";

export default function Logout(){
    useEffect(()=>{
        alert("logged out");
        localStorage.removeItem('username')
        localStorage.removeItem('pass')
        window.location.href='/'
    },[])
}