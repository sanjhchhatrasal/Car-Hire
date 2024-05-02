import React from 'react'
import mainCar from '../../Images/home-page-car.png'
import bgCar from '../../Images/hero-bgpng.png'
import PlanTrip from '../../Components/PlanTrip'
import BookCar from '../../Components/BookCar'
import PickCar from '../../Components/PickCar'

function Home() {
  return (
   <>
    <div className='h-screen w-full flex overflow-hidden'>
        <div className='md:w-[50%] h-full w-[100%] text-left md:text-left lg:pt-28 pt-20 md:pt-14 md:pl-24 pl-6 mt-20'>
            <h6 className='text-xl font-bold'>Map out your travel now</h6>
            <h1 className='text-5xl font-bold sm:w-[75%] lg:w-[85%] md:w-[95%] w-[100%] pl-0 md:pl-0 mt-8 leading-12'>Unlock great <span className='text-blue-700'>savings</span> on car hires</h1>
            <p className='text-lg lg:w-[80%] w-[90%] text-slate-500 mt-8'>Drive your dream car with unbeatable rates, unlimited miles, flexible pickup choices, and more!</p>
            <button className='py-4 px-8 bg-blue-600 text-lg font-semibold text-white rounded-xl mt-20 hover:bg-blue-900'>Book Ride</button>
        </div>
        <div className='w-[50%] h-full hidden md:block mt-20'>
            <div className='h-full w-full relative overflow-hidden'>             
                <img className='absolute right-0' src={bgCar} alt="" />
            </div>
            <div className='h-[100%] relative -mt-[90vh]'>        
            <img className='w-[100%] h-[100%] object-cover absolute top-0 -mt-64 lg:-left-48 md:-left-10' src={mainCar} alt="" />
            </div>
        </div>
    </div>
    <PlanTrip />
    <BookCar />
    <PickCar />
    </>
  )
}

export default Home