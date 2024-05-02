import React from 'react'
import { useUser } from '../ContextConfig/ContextConfig';
import TourList from '../TourList/TourList';

const BookedTour = ({allBookings}) => {
  const   {tours} = useUser();
 console.log('bookings',allBookings);

 const bookedTourList = allBookings.map((el) => el.tour);

 const idsInArray2 = new Set(bookedTourList.map(obj => obj.id));
 
 const bookedTours = tours.filter(obj => idsInArray2.has(obj.id));

//   const bookedTour = tours.filter((tour) => allBookings.includes(tour.id));
//   console.log(bookedTour);
  return (
    <div className="booked-tours grid grid-cols-3 gap-4">
         <TourList tours={bookedTours}/>
    </div>
  )
}

export default BookedTour