import React from 'react'
import { useParams } from 'react-router-dom';
import Hero from './Hero';

import AboutTour from './AboutTour';
import TourImages from './TourImages';
import BookingSection from './BookingSection';
const Tour = ({tours}) => {
 const {tourId} = useParams();
  // const tourId = match.params.id;
  const tour = tours.find( p => p.id === tourId);

  if(!tour)  return <div>Tour  not found</div>;
  return (
    <>
        <Hero tour={tour}/>
        <AboutTour tour={tour}/>
        <TourImages tour ={tour}/>
        <BookingSection tour={tour}/>
    </>
  )
}

export default Tour