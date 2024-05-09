import React from 'react'

const TourImages = ({tour}) => {
    const {images} = tour;
    // console.log(images);
    // src={`../../../public/img/tours/${image}`}
  return (
    <section className="tour-images-section flex justify-center py-16 bg-[#32af6f] px-0">
        <div className='container mx-0 flex px-2 flex-col gap-y-5 sm:flex-row sm:gap-x-5 '>
            {/* {images.map((image,index) => {
                
                <div className='border' key={index}>
                    <img className='w-full h-full object-cover' src='../../../public/img/tours/tour-3-1.jpg'  alt="" />
                </div>
            })} */}
            <div  >
                    <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dltk6m7c5/image/upload/v1714434048/d0q9inhbfffrjiw3wfic.jpg'  alt="" />
                </div>
                <div >
                    <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dltk6m7c5/image/upload/v1714434319/puydp4p4qx1g2424z2xv.jpg'  alt="" />
                </div> 
                <div >
                    <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dltk6m7c5/image/upload/v1714434404/frrmksllx9cd4mteifxt.jpg'  alt="" />
                </div>
        </div>
    </section>
  )
}

export default TourImages