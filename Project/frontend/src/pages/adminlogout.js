import { useEffect } from "react";

export default function AdminLogout(){
    useEffect(()=>{
        alert("logged out");
        localStorage.removeItem('username')
        localStorage.removeItem('pass')
        window.location.href='/alogin'
    },[])
}