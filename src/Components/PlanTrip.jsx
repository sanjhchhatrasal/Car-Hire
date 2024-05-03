import React from 'react'
import drive from  '../Images/drive.jpg'
import operator from '../Images/operator.jpg'
import selectCar from '../Images/select-car.jpg'

function PlanTrip() {
  return (
    <div className='  xl:h-[100vh] md:h-[160vh] h-[170vh] w-full relative'>
       <div className="md:h-56 h-60 lg:w-[65vw] md:w-[80vw] w-[100vw] bg-yellow-50 rounded-3xl absolute md:-top-10 -top-12 lg:left-48 md:left-24 left-0 shadow-lg shadow-blue-300">
       <h6 className='lg:text-2xl md:text-xl text-xl font-bold text-center mt-10'>Start planning your trip now.</h6>
        <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold text-center mt-8'>Fast and Convenient Car Rentals</h1>
       </div>
       <div className="lg:h-[70%] md:h-[100vh] h-[130vh] w-full absolute xl:top-76 lg:top-80 md:top-64 top-52 flex md:flex-row flex-shrink-0 flex-wrap items-center justify-center lg:gap-14 md:gap-0">
          <div className="lg:h-96 md:h-80 w-96 ">
              <div className="h-[50%] w-full">
                <div className='h-[80%] w-[60%] text-center'>
                <img className='sm:w-[20vw] h-full w-full object-cover md:ml-24 sm:ml-36 ml-20' src={selectCar} alt="" />
                </div>
              </div>
                <div>
                    <h1 className='text-2xl text-center font-bold'>Choose Your Car</h1>
                    <p className='w-[90%] mt-5 text-center text-slate-500 ml-5'>We offer a wide range of vehicles to suit all your driving requirements. Find the perfect car tailored to your needs.</p>
                </div>
          </div>
          <div className="lg:h-96 md:h-80 w-96 ">
          <div className="h-[50%] w-full">
                <div className='md:h-[80%] w-[30%] md:w-[60%]'>
                <img className='w-full h-full  object-cover md:ml-20 sm:ml-36 ml-32' src={operator} alt="" />
                </div>
              </div>
                <div>
                    <h1 className='text-2xl text-center font-bold'>Get in Touch with Operator</h1>
                    <p className='w-[90%] mt-5 text-center text-slate-500 ml-5'>Our experienced and friendly operators are here to assist you with any questions or concerns you may have.</p>
                </div>
          </div>
          <div className="lg:h-96 md:h-80 w-96 ">
          <div className="h-[50%] w-full">
                <div className='h-[80%] w-[60%]'>
                <img className='sm:w-[20vw] w-full h-full object-cover lg:ml-16 md:ml-28 sm:ml-36' src={drive} alt="" />
                </div>
              </div>
                <div>
                    <h1 className='text-2xl text-center font-bold'>Ready to Hit the Road</h1>
                    <p className='w-[90%] mt-5 text-center text-slate-500 ml-5'>Whether you're embarking on a road trip or simply cruising around town, our extensive selection of cars has you covered.</p>
                </div>
          </div>
       </div>

    </div>
  )
}

export default PlanTrip