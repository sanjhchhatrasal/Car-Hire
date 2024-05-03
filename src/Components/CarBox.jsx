 import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="relative lg:h-[66vh] lg:w-[80%] md:h-[60vh] h-[110vh] w-[100%] lg:left-80 md:left-0 flex lg:flex-row flex-col items-center justify-between lg:top-0 md:top-[27rem] top-[22rem]">
          
          <div className="pick-car absolute lg:left-10 md:left-5 md:top-16 top-20">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          
          <div className="pick-description absolute lg:right-42 md:right-16 lg:top-0 md:top-10 top-[22rem]">
            <div className="pick-description__price bg-blue-500 text-2xl text-white py-1 px-4">
              <span className="font-bold text-3xl">${car.price}</span>/ rent per day
            </div>
            <div className="border border-zinc-600 py-4">
              <div className=" border-b-[0.1vw] border-b-zinc-600 bg-white py-1 flex items-center justify-between">
                <span className="ml-5">Model</span>
                <span className="mr-5">{car.model}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 bg-white py-2 flex items-center justify-between">
                <span className="ml-5">Mark</span>
                <span className="mr-5">{car.mark}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 bg-white py-2 flex items-center justify-between">
                <span className="ml-5">Year</span>
                <span className="mr-5">{car.year}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 bg-white py-2 flex items-center justify-between">
                <span className="ml-5">Doors</span>
                <span className="mr-5">{car.doors}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 bg-white py-2 flex items-center justify-between">
                <span className="ml-5">AC</span>
                <span className="mr-5">{car.air}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 bg-white py-2 flex items-center justify-between">
                <span className="ml-5">Transmission</span>
                <span className="mr-5">{car.transmission}</span>
              </div>

              <div className="py-4 flex items-center justify-between bg-white">
                <span className="ml-5">Fuel</span>
                <span className="mr-5">{car.fuel}</span>
              </div>
            </div>
            
            <a className="py-4 absolute top-[21.8rem]  px-[4.3rem] bg-blue-700 text-white font-semibold whitespace-nowrap" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox; 

