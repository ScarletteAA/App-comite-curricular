import ShowPlanillas from "@/components/ShowPlanillas";
import axios from "axios";

const getCarrera = async (id: string) => {
  const res = await axios.get("http://localhost:3000/api/carrera/" + id);
  return res.data;
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const carrera = await getCarrera(id);

  return <ShowPlanillas carrera={carrera} />;
};

export default Page;

// import ShowBitacora from "@/components/ShowBitacora";
// import ShowHistorico from "@/components/ShowHistorico";
// import ShowStatus from "@/components/ShowStatus";
// import Image from "next/image";
// import React from "react";

// interface Car {
//   id: number;
//   name: string;
// }

// export default function Home() {
//   const [selectedCar, setSelectedCar] = React.useState<Car | null>(null);

//   const cars: Car[] = [
//     {
//       id: 1,
//       name: "Bitacora",
//     },
//     {
//       id: 2,
//       name: "Status",
//     },
//     {
//       id: 3,
//       name: "Historico",
//     },
//   ];

//   return (
//     <main className="flex flex-col items-center justify-center h-screen w-screen p-24">
//       <h1 className="text-4xl font-bold">Selecciona una opción para visualizar las planillas: </h1>
//       <div className="">
//         <ul className="flex flex-wrap">
//           {cars.map((car) => (
//             <li
//               key={car.id}
//               className={`flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md
//                   ${selectedCar?.id === car.id ? "bg-green-500" : ""}
//                 `}
//               onClick={() => setSelectedCar(car)}
//             >
//               <span>{car.name}</span>
//               <Image
//                 src="/images/arrow-right.svg"
//                 alt="arrow right"
//                 width={16}
//                 height={16}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex flex-col items-center justify-center p-24">
//         {selectedCar?.name === "Bitacora" && (
//           <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
//             <div className="w-full">
//               <ShowBitacora />
//             </div>
//           </div>
//         )}
//         {selectedCar?.name === "Status" && (
//           <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
//             <div className="w-full">
//               <ShowStatus />
//             </div>
//           </div>
//         )}
//         {selectedCar?.name === "Historico" && (
//           <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
//             <div className="w-full">
//               <ShowHistorico />
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
