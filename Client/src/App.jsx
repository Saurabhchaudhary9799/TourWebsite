import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Component/Page/Home"
import AllTours from "./Component/Page/AllTours"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import Login from "./Component/Page/Login"
import Signup from "./Component/Page/Signup"
import Admin from "./Component/Page/Admin"
import Dashboard from "./Component/Dashboard/Dashboard"
import CreateTour from "./Component/CreateTour/CreateTour"
import DeleteTour from "./Component/DeleteTour/DeleteTour"
import UpdateTour from "./Component/UpdateTour/UpdateTour"
import Layout from "./Component/Page/Layout"
function App() {
 
  return (
    <>
    <Layout/>
    {/* <Header/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/all-tours" element={<AllTours/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admin" element={<Admin/>}>
        <Route path="" element={<Dashboard/>} />
         <Route path="create-tour" element={<CreateTour/>} />
         <Route path="update-tour" element={<UpdateTour/>}/>
         <Route path="delete-tour" element={<DeleteTour/>}/>
      </Route>
    </Routes> */}
      {/* <Footer/>    */}

    </>
  )
}

export default App
