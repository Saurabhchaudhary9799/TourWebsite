import React from 'react'

const TourImages = ({tour}) => {
    const {images} = tour;
    // console.log(images);
    // src={`../../../public/img/tours/${image}`}
  return (
    <section className="tour-images-section flex justify-center py-16 bg-[#32af6f] px-0">
        <div className='container mx-0 flex '>
            {/* {images.map((image,index) => {
                
                <div className='border' key={index}>
                    <img className='w-full h-full object-cover' src='../../../public/img/tours/tour-3-1.jpg'  alt="" />
                </div>
            })} */}
            <div  >
                    <img className='w-full h-full object-cover' src='../../../public/img/tours/tour-3-1.jpg'  alt="" />
                </div>
                <div >
                    <img className='w-full h-full object-cover' src='../../../public/img/tours/tour-3-2.jpg'  alt="" />
                </div> 
                <div >
                    <img className='w-full h-full object-cover' src='../../../public/img/tours/tour-3-3.jpg'  alt="" />
                </div>
        </div>
    </section>
  )
}

export default TourImages