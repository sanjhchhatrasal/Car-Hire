import React from 'react'

function Footer() {
  return (
    <div className='h-[60vh] w-full px-32'>
       <div className='w-full h-[90%] flex justify-evenly'>
       <div className='h-full w-[30%] py-10'>
          <h1 className='text-3xl mb-5'><span className='font-bold'>CAR </span> Hire</h1>
          <p className='text-[1rem] text-zinc-500 w-[90%]'>We provide an extensive selection of vehicles tailored to suit your driving requirements. Whatever your needs may be, we have the ideal car waiting for you.</p>
          <h6 className='text-md font-semibold mt-10'>[123] - 456-789</h6>
        </div>
        <div className='h-full w-[30%] py-10'>
          <h1 className='text-3xl font-bold mb-5'>Organization</h1>
          <h6 className='text-zinc-600 font-semibold mb-3'>New York</h6>
          <h6 className='text-zinc-600 font-semibold mb-3'>Careers</h6>
          <h6 className='text-zinc-600 font-semibold mb-3'>Mobile</h6>
          <h6 className='text-zinc-600 font-semibold mb-3'>Blog</h6>
          <h6 className='text-zinc-600 font-semibold mb-3'>How we work</h6>
        </div>
        <div className='h-full w-[30%] py-10'>
          <h1 className='text-3xl font-bold mb-5'>Business Hours</h1>
          <h2 className='text-lg font-semibold mb-3'>Mon - Fri: 9:00 AM - 9:00PM</h2>
          <h2 className='text-lg font-semibold mb-3'>Sat: 9:00 AM - 19:00PM</h2>
          <h2 className='text-lg font-semibold mb-3'>Sun: Closed</h2>
        </div>
       </div>
       <div className='text-lg flex items-center justify-between font-semibold text-zinc-500 bg-slate-100 py-3 px-10 -mt-5'>
        <h6>Sanjh ©️ 2024</h6>
        <h1>❤️</h1>
        <h1>Made By Sanjh Chhatrasal</h1>
       </div>
    </div>
  )
}

export default Footer