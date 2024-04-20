import React, { useState } from 'react'

const TransactionSection = () => {
    const [status ,setStatus] =useState('success');

   
    const handleSuccess = ()=>{
        setStatus('success')
    }

    const handleFailed = ()=>{
        setStatus('failed')
    }

    const handlePending = ()=>{
        setStatus('pending')
    }
  return (
    <section className="tour-section ">
    <div className="container flex flex-col gap-y-3">
        <h1 className='text-3xl text-[#32af6f] text-center font-bold'>
            Your Transactions
        </h1>
        <div className='flex justify-center  gap-x-10'>
          <div className='hover:cursor-pointer' onClick={handleSuccess} style={{color:`${status ==='success' ? 'green': '#777'}`}}>Success</div>
          <div className='hover:cursor-pointer' onClick={handleFailed} style={{color:`${status === 'failed' ? 'green': '#777' }`}}>Failed</div>
          <div className='hover:cursor-pointer' onClick={handlePending} style={{color:`${status === 'pending' ? 'green': '#777' }`}}>Pending</div>
        </div>
        <div >
             {status ==='success' && <div>success payments</div>}
             {status ==='failed' && <div>failed payments</div>}
             {status ==='pending' && <div>pending payments</div>}
        </div>
    </div>
</section>
  )
}

export default TransactionSection