import React from 'react'
import mainCar from '../../Images/home-page-car.png'
import bgCar from '../../Images/hero-bgpng.png'

function Hero() {
  return (
    <div className='h-screen w-full flex'>
        <div className='w-[50%] h-full pt-28 pl-24'>
            <h6 className='text-xl font-bold'>Map out your travel now</h6>
            <h1 className='text-5xl font-bold w-[75%] mt-8 leading-12'>Unlock great <span className='text-blue-700'>savings</span> on car hires</h1>
            <p className='text-lg w-[80%] text-slate-500 mt-8'>Drive your dream car with unbeatable rates, unlimited miles, flexible pickup choices, and more!</p>
            <button className='py-4 px-8 bg-blue-600 text-lg font-semibold text-white rounded-xl mt-20 hover:bg-blue-900'>Book Ride</button>
        </div>
        <div className='w-[50%] h-full'>
            <div className='h-full w-full relative overflow-hidden'>             
                <img className='absolute right-0' src={bgCar} alt="" />
            </div>
            <div className='h-[100%] relative -mt-[90vh]'>        
            <img className='w-[100%] h-[100%] object-cover absolute top-0 -mt-64 -left-48' src={mainCar} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero