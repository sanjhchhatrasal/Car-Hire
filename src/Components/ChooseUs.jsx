import React from 'react'

function ChooseUs() {
  return (
    <div className='h-screen w-full flex pt-20'>
        <div className='w-[50%] h-[100%] pl-48'>
            <h6 className='text-2xl font-semibold mb-8'>Cutting-edge Solutions, Trusted Service</h6>
            <h1 className='text-[2.5rem] font-bold mb-10 leading-tight'>Discover exceptional value with our unbeatable deals.</h1>
            <p className='text-md text-zinc-400 w-[75%] mb-16'>Explore unparalleled deals with our exceptional offers. Our commitment to value ensures top-tier services and products within budget. Don't miss our premium rentals designed for your savings and satisfaction.</p>
            <a href="" className='text-lg bg-cyan-600 text-white py-4 px-7 rounded-md'>Explore More</a>
        </div>
        <div className='w-[50%] h-[100%] px-32'>
          <div className='h-[22%] w-full bg-slate-400 mb-5 flex overflow-hidden rounded-xl'>
            <div className='h-full w-[25%]'>
              <img src="" alt="" />
            </div>
            <div className='h-full w-[75%]'>
              <h1 className='text-[1.7rem] font-bold'>Journey Across the Country</h1>
              <p className='text-md text-zinc-500'>Elevate your journey with our premium vehicles tailored for your cross-country excursions.</p>
            </div>
          </div>
          <div className='h-[22%] w-full bg-slate-400 mb-5 flex overflow-hidden rounded-xl'>
            <div className='h-full w-[25%]'>
              <img src="" alt="" />
            </div>
            <div className='h-full w-[75%]'>
              <h1 className='text-[1.5rem] font-bold'> Inclusive Rates for Every Budget</h1>
              <p className='text-md text-zinc-500'>Experience complete convenience and transparency with our all-inclusive pricing.</p>
            </div>
          </div>
          <div className='h-[22%] w-full bg-slate-400 flex overflow-hidden rounded-xl'>
            <div className='h-full w-[25%]'>
              <img src="" alt="" />
            </div>
            <div className='h-full w-[75%]'>
              <h1 className='text-[1.7rem] font-bold'>Transparent Pricing</h1>
              <p className='text-md text-zinc-500'>Experience worry-free transactions with our straightforward pricing model. We prioritize transparency and integrity in all our pricing practices.</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default ChooseUs