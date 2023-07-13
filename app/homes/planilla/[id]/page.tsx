// import axios from "axios";

// const getCarrera = async (id: string) => {
//   const res = await axios.get("http://localhost:3000/api/carrera/" + id);
//   return res.data;
// };

'use client'

import Image from 'next/image'
import React from 'react'

interface Car {
  id: number
  name: string
}


export default function Home() {
  const [selectedCar, setSelectedCar] = React.useState<Car | null>(null)

  const cars: Car[] = [
    {
      id: 1,
      name: 'Bitacora'
    },
    {
      id: 2,
      name: 'Status'
    },
    {
      id: 3,
      name: 'Historico'
    }
  ]

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Hola
      <div className="">
        <ul className="flex flex-wrap">
          {
            cars.map((car) => (
              <li
                key={car.id}
                className={`flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md
                  ${selectedCar?.id === car.id ? 'bg-green-500' : ''}
                `}
                onClick={() => setSelectedCar(car)}
              >
                <span>{car.name}</span>
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow right"
                  width={16}
                  height={16}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <div className="">
        {
          selectedCar?.name === "Bitacora" && (
            <div className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md">
              <span>{selectedCar.name}</span>
              <Image
                src="/images/arrow-right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </div>

          )
        }
      </div>
    </main>
  )
}
