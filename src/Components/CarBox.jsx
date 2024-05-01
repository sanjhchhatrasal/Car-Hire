 import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars relative h-[66vh] w-[80%] left-80 flex items-center justify-between">
          
          <div className="pick-car absolute left-20">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          
          <div className="pick-description absolute right-36 top-0">
            <div className="pick-description__price bg-blue-500 text-2xl text-white py-1 px-4">
              <span className="font-bold text-3xl">${car.price}</span>/ rent per day
            </div>
            <div className="border border-zinc-600 py-4">
              <div className=" border-b-[0.1vw] border-b-zinc-600 py-1 flex items-center justify-between">
                <span className="ml-5">Model</span>
                <span className="mr-5">{car.model}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 py-2 flex items-center justify-between">
                <span className="ml-5">Mark</span>
                <span className="mr-5">{car.mark}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 py-2 flex items-center justify-between">
                <span className="ml-5">Year</span>
                <span className="mr-5">{car.year}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 py-2 flex items-center justify-between">
                <span className="ml-5">Doors</span>
                <span className="mr-5">{car.doors}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 py-2 flex items-center justify-between">
                <span className="ml-5">AC</span>
                <span className="mr-5">{car.air}</span>
              </div>

              <div className=" border-b-[0.1vw] border-b-zinc-600 py-2 flex items-center justify-between">
                <span className="ml-5">Transmission</span>
                <span className="mr-5">{car.transmission}</span>
              </div>

              <div className="py-1 flex items-center justify-between">
                <span className="ml-5">Fuel</span>
                <span className="mr-5">{car.fuel}</span>
              </div>
            </div>
            
            <a className="py-1 absolute top-96  px-20 bg-blue-700 text-white font-semibold flex" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox; 

