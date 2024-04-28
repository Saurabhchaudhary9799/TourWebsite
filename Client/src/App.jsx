import React, { useEffect, useState } from "react"
import { Route, Routes ,BrowserRouter} from "react-router-dom"
import axios from 'axios';
import Home from "./Component/Page/Home"
import AllTours from "./Component/Page/AllTours"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import Login from "./Component/Page/Login"
import Signup from "./Component/Page/Signup"
import Admin from "./Component/Page/Admin"

import CreateTour from "./Component/CreateTour/CreateTour"
import DeleteTour from "./Component/DeleteTour/DeleteTour"
import UpdateTour from "./Component/UpdateTour/UpdateTour"
import Layout from "./Component/Page/Layout"
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword"
import Tour from "./Component/Tour/Tour"
import UserDashboard from "./Component/Page/userDashboard/UserDashboard"
import AdminDashboard from "./Component/AdminDashboard/AdminDashboard";
import ManageUsers from "./Component/ManageUsers/ManageUsers";
import ManageTours from "./Component/ManageTours/ManageTours";
function App() {
 
  return (
    
    <>
    <BrowserRouter>
    <Routes>  
     <Route path="/" element={<Layout/>}>
       <Route path="" element={<Home/>}/>
       <Route path="all-tours" element={<AllTours />}/>
       <Route path="login" element={<Login/>}/>
       <Route path="signup" element={<Signup/>}/>
       <Route path="forgot-password" element={<ForgotPassword/>}/>
       <Route path="/dashboard" element={<UserDashboard/>}/>
       <Route path="product/:tourId" element={<Tour />} />
      <Route path="admin/" element={<Admin/>}>
          <Route path="" element={<AdminDashboard/>}/>
          <Route path="create-tour" element={<CreateTour/>}/>
          <Route path="manage-tour" element={<ManageTours/>}/>
         
          <Route path="manage-users" element={<ManageUsers/>}/>
      </Route>
     </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
