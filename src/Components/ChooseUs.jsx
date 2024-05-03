import React from 'react'
import car from '../Images/chooseus-car-img.jpg';
import coin from '../Images/chooseus-coin.jpg';
import coinHand from '../Images/chooseus-coin-hand.jpg';

function ChooseUs() {
  return (
    <div className='lg:h-screen md:h-[140vh] sm:h-[150vh] h-[220vh] mt-96 border-orange-300 w-full flex lg:flex-row flex-col pt-20 md:px-0 px-10'>
        <div className='lg:w-[50%] lg:h-[100%] w-full h-[50%] lg:pl-48 lg:px-0 md:px-52 lg:text-left text-center'>
            <h6 className='text-2xl  font-semibold sm:mb-8 mb-5'>Cutting-edge Solutions, Trusted Service</h6>
            <h1 className='text-[2.5rem] font-bold sm:mb-10 mb-6 leading-tight'>Discover exceptional value with our unbeatable deals.</h1>
            <p className='text-md text-zinc-400 lg:w-[75%] w-[100%] mb-16 lg:ml-0'>Explore unparalleled deals with our exceptional offers. Our commitment to value ensures top-tier services and products within budget. Don't miss our premium rentals designed for your savings and satisfaction.</p>
            <a href="" className='text-lg bg-cyan-600 text-white py-4 px-7 rounded-md'>Explore More</a>
        </div>
        <div className='lg:w-[50%] lg:h-[100%] md:w-full h-[50%] lg:px-20 md:px-48 lg:text-left text-center md:pt-0 sm:pt-20 -mt-16'>
          <div className='lg:h-[22%] w-full md:h-[30%]  sm:mb-5 flex sm:flex-row flex-col items-center mb-10 overflow-hidden rounded-xl'>
            <div className='h-full w-[30%] sm:mr-5 sm:mb-0 mb-3'>
              <img className='h-full w-full object-cover' src={car} alt="" />
            </div>
            <div className='h-full w-[75%]'>
              <h1 className='xl:text-[1.7rem] md:text-xl  font-bold'>Journey Across the Country</h1>
              <p className='lg:text-md md:text-sm text-zinc-500'>Elevate your journey with our premium vehicles tailored for your cross-country excursions.</p>
            </div>
          </div>
          <div className='lg:h-[22%] w-full md:h-[30%]  sm:mb-5 flex sm:flex-row flex-col items-center mb-10 overflow-hidden rounded-xl'>
            <div className='h-full w-[30%] sm:mr-5 sm:mb-0 mb-3'>
              <img className='h-full w-full object-cover' src={coin} alt="" />
            </div>
            <div className='h-full w-[75%]'>
              <h1 className='xl:text-[1.7rem] md:text-xl font-bold'> Inclusive Rates for Every Budget</h1>
              <p className='lg:text-md md:text-sm text-zinc-500'>Experience complete convenience and transparency with our all-inclusive pricing.</p>
            </div>
          </div>
          <div className='lg:h-[22%] w-full md:h-[30%]  flex sm:flex-row flex-col items-center mb-10 overflow-hidden rounded-xl'>
            <div className='h-full w-[30%] sm:mr-5 sm:mb-0 mb-3'>
              <img className='h-full w-full object-cover' src={coinHand} alt="" />
            </div>
            <div className='h-full w-[75%]'>
              <h1 className='xl:text-[1.7rem] md:text-xl font-bold'>Transparent Pricing</h1>
              <p className='lg:text-md md:text-sm text-zinc-500'>Experience worry-free transactions with our straightforward pricing model. We prioritize transparency and integrity in all our pricing practices.</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default ChooseUs