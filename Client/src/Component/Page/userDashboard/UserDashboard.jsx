import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import AdminDashboard from '../../AdminDashboard/AdminDashboard';
import Admin from '../Admin';

const UserDashboard = () => {
  const [user ,setUser] = useState({});
  const navigate = useNavigate();
   useEffect(()=>{
         const response = localStorage.getItem('userInfo');
         if(response){
          const userObj = JSON.parse(response).result;
          setUser(userObj.user);
          
         }else{
           navigate("/login");
         }
   },[])
  return (
    <>
    {
   (user.role === 'admin') ? <Admin/>: <Dashboard user={user}/> 
    }
    
    </>
  )
}

export default UserDashboard