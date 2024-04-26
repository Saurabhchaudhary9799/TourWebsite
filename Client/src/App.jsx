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
import Dashboard from "./Component/Dashboard/Dashboard"
import CreateTour from "./Component/CreateTour/CreateTour"
import DeleteTour from "./Component/DeleteTour/DeleteTour"
import UpdateTour from "./Component/UpdateTour/UpdateTour"
import Layout from "./Component/Page/Layout"
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword"
import Tour from "./Component/Tour/Tour"
import UserDashboard from "./Component/Page/userDashboard/UserDashboard"
function App() {
  const [tours , setTours] = useState([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        setLoading(true);
        
        const {data} = await axios.get('http://localhost:3000/api/v1/tours');
       
        setTours(data.doc);
        setLoading(false);
      } catch (error) {
        
        setError(error);
       
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  if (loading) {
    return <div>Loading...</div>;
  }

 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // render={({match}) => <Tour tours={tours}/>}
  return (
    
    <>
    <BrowserRouter>
    <Routes>  
     <Route path="/" element={<Layout/>}>
       <Route path="" element={<Home/>}/>
       <Route path="all-tours" element={<AllTours tours={tours}/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="signup" element={<Signup/>}/>
       <Route path="forgot-password" element={<ForgotPassword/>}/>
       <Route path="/dashboard" element={<UserDashboard/>}/>
       <Route path="product/:tourId" element={<Tour tours={tours}/>} />
      <Route path="admin/" element={<Admin/>}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="create-tour" element={<CreateTour/>}/>
          <Route path="update-tour" element={<UpdateTour/>}/>
          <Route path="delete-tour" element={<DeleteTour/>}/>
      </Route>
     </Route>
    </Routes>
    </BrowserRouter>
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
