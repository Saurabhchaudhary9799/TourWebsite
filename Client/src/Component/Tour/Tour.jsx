import React from 'react'

const Tour = (key , tour) => {
    console.log(tour)
  return (
    <div className='border flex flex-col gap-y-2'>
       
       <div>
          {tour.name}
       </div>
    </div>
  )
}

export default Tour