import React from 'react'
import bgImg from '../Images/bg-sketch.webp'
import { FaCarSide } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { FaRegCalendarCheck } from "react-icons/fa";


function BookCar() {
  return (
    <div className='h-[80vh] w-full relative bg-blue-600 flex items-center justify-center'>
      <img className='h-full w-full absolute' src={bgImg} alt="" />
        <div className="h-fit lg:w-[85%] w-[95%] rounded-3xl absolute shadow-md shadow-yellow-200 bg-white">
            <h1 className='text-3xl font-bold mt-10 ml-16'>Reserve Your Car</h1>
            <div className="input md:w-[90%] md:h-[75%] w-[80%] h-[90%] md:ml-14 flex gap-y-2 gap-x-6 flex-wrap flex-shrink-0 mt-7 md:py-5 p-2">
                <div className="h-24">
                    <h6 className='flex items-center gap-2 text-lg font-semibold'> <span><FaCarSide/> </span> Choose Your Car Type <span className='text-red-600'>*</span></h6>
                    <select className='py-2 md:px-24 px-16 mt-4 border-zinc-300 border outline-none text-zinc-500' name="" id="">
                      <option value="" disabled>Select your car type</option>
                      <option value="">Toyota Camry</option>
                      <option value="">Mercedes-Benz</option>
                      <option value="">Vw Passat CC</option>
                      <option value="">Audi A1 S-Line</option>
                      <option value="">VW Golf 6</option>
                      <option value="">Suzuki</option>
                    </select>
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><ImLocation/> </span> Select Pick-up Location  <span className='text-red-600'>*</span></h6>
                    <select className='py-2 md:px-16 px-9 mt-4 border-zinc-300 border outline-none text-zinc-500' name="" id="">
                    <option value="" disabled>Select your pick-up location</option>
                      <option value="">Pune</option>
                      <option value="">Nashik</option>
                      <option value="">Lonavala</option>
                      <option value="">Mahabaleshwar</option>
                      <option value="">VW Golf 6</option>
                      <option value="">Matheran</option>
                    </select>
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><ImLocation/> </span> Choose Drop-off Location  <span className='text-red-600'>*</span></h6>
                    <select className='py-2 md:px-16 px-9  mt-4 border-zinc-300 border  outline-none text-zinc-500' name="" id="">
                    <option value="" disabled>Select your pick-up location</option>
                    <option value="">Pune</option>
                      <option value="">Nashik</option>
                      <option value="">Lonavala</option>
                      <option value="">Mahabaleshwar</option>
                      <option value="">VW Golf 6</option>
                      <option value="">Matheran</option>
                    </select>
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><FaRegCalendarCheck/> </span> Select Pick-up Date  <span className='text-red-600'>*</span></h6>
                    <input className='py-2 md:px-24 px-20 mt-4 border-zinc-300 border  outline-none text-zinc-500' type="date" name="" id="" />
                </div>
                <div className="h-24">
                    <h6 className='flex items-center gap-1 text-lg font-semibold'><span><FaRegCalendarCheck/> </span> Choose Drop-off Date  <span className='text-red-600'>*</span></h6>
                    <input className='py-2 md:px-24 px-20 mt-4 border-zinc-300 border  outline-none text-zinc-500' type="date" name="" id="" />
                </div>
                <button className='md:px-36 md:py-0 px-[8.5rem] py-2 bg-blue-600 text-white hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-400 text-xl md:mt-11 mt-6 md:mb-3 mb-10 font-semibold'>Select</button>
            </div>
        </div>
    </div>
  )
}

export default BookCar