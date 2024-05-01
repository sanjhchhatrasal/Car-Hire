import React, { useState } from 'react';
import CarBox from './CarBox';
import { CAR_DATA  } from './CarData';

function PickCar() {
    const [active, setActive] = useState("SecondCar")
    const [colorBtn, setColorBtn] = useState("btn1")

    const btnID = (id) => {
        setColorBtn(colorBtn === id ? "" : id);
      };
    
      const coloringButton = (id) => {
        return colorBtn === id ? "colored-button" : "";
      };
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='h-[95%] w-[90%]'>
            <div className="h-[30%] w-full  text-center">
                <h6 className='text-2xl font-semibold '>Curated Vehicle Models</h6>
                <h1 className='text-4xl font-bold mt-5'>Rental Fleet Collection</h1>
                <p className='text-zinc-400 mt-5'>Select from Our Exceptional Rental Fleet for Your Next Adventure or Business Journey</p>
            </div>
            <div className='flex flex-col gap-2 h-96 w-72 absolute left-28'>
                <button  
                className={`py-4 px-20 bg-zinc-400 text-white font-semibold text-lg cursor-pointer hover:bg-blue-500 ${coloringButton("btn1")}`}
                 onClick={() => {
                    setActive("FirstCar"); btnID("btn1");
                }} >Mercedes-Benz
                </button>
                <button  
                className={`py-4 px-20 bg-zinc-400 text-white font-semibold text-lg cursor-pointer hover:bg-blue-500 ${coloringButton("btn2")}`}
                id='btn2'
                onClick={() => {
                    setActive("SecondCar");
                     btnID("btn2");
                }}
                >Toyota Camry</button>
                <button  className={`py-4 px-20 bg-zinc-400 text-white font-semibold text-lg cursor-pointer hover:bg-blue-500 ${coloringButton("btn3")}`}
                 id='btn3'
                 onClick={() => {
                    setActive("ThirdCar"); btnID("btn3");
                }}
                >
                    Audi A1 S-Line</button>
                <button  className={`py-4 px-20 bg-zinc-400 text-white font-semibold text-lg cursor-pointer hover:bg-blue-500 ${coloringButton("btn4")}`}
                id='btn4'
                onClick={() => {
                    setActive("FourthCar"); btnID("btn4");
                }}
                >
                    VW Golf</button>
                <button  className={`py-4 px-20 bg-zinc-400 text-white font-semibold text-lg cursor-pointer hover:bg-blue-500 ${coloringButton("btn5")}`}
                 id='btn5'
                 onClick={() => {
                    setActive("FifthCar"); btnID("btn5");
                }}
                >
                    VW Passat CC</button>
                <button  className={`py-4 px-20 bg-zinc-400 text-white font-semibold text-lg cursor-pointer hover:bg-blue-500 ${coloringButton("btn6")}`}
                id='btn6'
                onClick={() => {
                    setActive("SixthCar"); btnID("btn6");
                }}
                >
                    Suzuki</button>
            </div>
            {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
        </div>
    </div>
  )
}

export default PickCar