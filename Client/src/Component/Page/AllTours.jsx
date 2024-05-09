import React, { useState , useEffect } from 'react'
import axios, { all } from 'axios'
// import Tour from '../Tour/Tour'
// import {tour_1_cover} from "../../../public/img/tours/tour-1-cover.jpg"
//  ../../../public/img/tours/tour-1-cover.jpg
import {Link, useLocation} from "react-router-dom"
import {motion} from "framer-motion"
import { useUser } from '../ContextConfig/ContextConfig'
import Loading from '../Loading/Loading'
import TourList from '../TourList/TourList'

const AllTours = () => {
  const {tours ,loading ,error} = useUser();
   const location = useLocation();
  
 
  if(loading) return <Loading/>
  if(error) return <h1>Error...</h1>
  let filteredTours=[];

  
  if(location.state){
   filteredTours = location.state.tours;
  }

   
  return (
    <section className="all-tours-section flex justify-center py-16 px-4 sm:px-16 bg-[#F3F4F5]">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {
        filteredTours.length > 0 ? <TourList tours={filteredTours}/> : <TourList tours={tours}/>
       }
     
      </div>
    </section>
  )
}

export default AllTours