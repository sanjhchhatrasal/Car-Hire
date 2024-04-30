import React from 'react'
import logo from '../../Images/car-blue.png'

function Navbar() {
  return (
    <div className='h-24 w-full bg-white flex items-center justify-between px-10'>
        <div className={`flex items-center cursor-pointer`}>
            <img className='w-[9vw]' src={logo} alt="" />
            <h1 className='text-3xl font-semibold'>Car  <span className='text-blue-900'>Hire</span></h1>
        </div>
        <div className="md:flex hidden   items-center md:gap-10 gap-2 text-lg font-semibold">
            <h6 >Home</h6>
            <h6>About</h6>
            <h6>Contact</h6>
            <h6>Our Team</h6>
        </div>
        <div className="buttons p-1 flex md:flex-row flex-col gap-1">
            <button className='px-4 py-2 rounded-lg text-white bg-blue-600 font-semibold text-lg mr-4 hover:shadow-md  hover:shadow-blue-200'>Sign In</button>
            <button className='px-4 py-2 rounded-lg text-white bg-orange-600 font-semibold text-lg hover:shadow-md hover:shadow-orange-200'>Register</button>
        </div>
    </div>
  )
}

export default Navbar