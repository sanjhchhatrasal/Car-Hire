import React from 'react'
import bgImg from '../Images/bg-sketch.webp'
import { FaCarSide } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { FaRegCalendarCheck } from "react-icons/fa";


function BookCar() {
  return (
    <div className='h-[80vh] w-full relative bg-blue-600 flex items-center justify-center'>
      <img className='h-full w-full absolute' src={bgImg} alt="" />
        <div className="h-fit lg:w-[80%] w-[95%] rounded-3xl absolute shadow-md shadow-yellow-200 bg-white">
            <h1 className='text-3xl font-bold mt-10 ml-16'>Reserve Your Car</h1>
            <div className="input w-[90%] h-[75%] ml-14 flex gap-y-2 gap-x-3 flex-wrap flex-shrink-0 mt-7 py-5 ">
                <div className="h-24">
                    <h6 className='flex items-center gap-2 text-lg font-semibold'> <span><FaCarSide/> </span> Choose Your Car Type <span className='text-red-600'>*</span></h6>
                    <select className='py-2 px-24 mt-4 border-zinc-300 border' name="" id="">
                      <option value="">Select your car typr</option>
                      <option value="">Select your car typr</option>
                    </select>
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><ImLocation/> </span> Select Pick-up Location  <span className='text-red-600'>*</span></h6>
                    <select className='py-2 px-24 mt-4 border-zinc-300 border' name="" id="">
                      <option value="">Select your car typr</option>
                      <option value="">Select your car typr</option>
                    </select>
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><ImLocation/> </span> Choose Drop-off Location  <span className='text-red-600'>*</span></h6>
                    <select className='py-2 px-24 mt-4 border-zinc-300 border' name="" id="">
                      <option value="">Select your car typr</option>
                      <option value="">Select your car typr</option>
                    </select>
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><FaRegCalendarCheck/> </span> Select Pick-up Date  <span className='text-red-600'>*</span></h6>
                    <input className='py-2 px-24 mt-4 border-zinc-300 border' type="date" name="" id="" />
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><FaRegCalendarCheck/> </span> Choose Drop-off Date  <span className='text-red-600'>*</span></h6>
                    <input className='py-2 px-24 mt-4 border-zinc-300 border' type="date" name="" id="" />
                </div>
                <button className='px-36 bg-blue-600 text-white hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-400 text-xl mt-11 mb-3 font-semibold'>Select</button>
            </div>
        </div>
    </div>
  )
}

export default BookCar