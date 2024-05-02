import React from 'react'

function CarBox({data, carID}) {
  return (
    <>
    {data[carID].map((car, id) => (
        <div key={id} className="box-cars relative h-[66vh] w-[80%] left-80 flex items-center justify-between">
            <img src={car.img} alt="" />

            <div>
                <h1>{car.name}</h1>
                <h1>{car.price}</h1>
                <h1>{car.mark}</h1>
                <h1>{car.year}</h1>
            </div>
            <a href="">Reserve now</a>
        </div>
    ))}
    </>

  )
}

export default CarBox