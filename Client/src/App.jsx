import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Component/Page/Home"
import AllTours from "./Component/Page/AllTours"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import Login from "./Component/Page/Login"
import Signup from "./Component/Page/Signup"


function App() {
 
  return (
    <>
    
    <Header/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/all-tours" element={<AllTours/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
      <Footer/>   

    </>
  )
}

export default App
