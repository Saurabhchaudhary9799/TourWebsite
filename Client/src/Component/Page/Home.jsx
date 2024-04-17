import React from 'react'
import Overview from '../Overview/Overview'
import AboutTours from '../AboutTours/AboutTours'
import Features from '../Features/Features'
import PopularTours from '../PopularTours/PopularTours'
import Stories from '../Stories/Stories'
import BookingFirstSteps from '../BookingFirstSteps/BookingFirstSteps'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div >

     <Overview/>
     <AboutTours/>
     <Features/>
     <PopularTours/>
     <Stories/>
     <BookingFirstSteps/>
    
    </div>
  )
}

export default Home