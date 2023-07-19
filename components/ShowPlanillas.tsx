"use client";

import ShowBitacora from "@/components/ShowBitacora";
import ShowHistorico from "@/components/ShowHistorico";
import ShowStatus from "@/components/ShowStatus";
import { Carrera } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface Planilla {
  id: number;
  name: string;
}

interface Props {
  carrera: Carrera;
}

const Home: React.FC<Props> = ({ carrera }) => {
  const [selectedPlanilla, setSelectedPlanilla] =
    React.useState<Planilla | null>(null);

  const planillas: Planilla[] = [
    {
      id: 1,
      name: "Status",
    },
    {
      id: 2,
      name: "Bitacora",
    },
    {
      id: 3,
      name: "Historico",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen p-24">
      <h1 className="text-4xl font-bold">
        Selecciona una opción para visualizar las planillas:{" "}
      </h1>
      <div className="">
        <ul className="flex flex-wrap">
          {planillas.map((planilla) => (
            <li
              key={planilla.id}
              className={`flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md
                  ${selectedPlanilla?.id === planilla.id ? "bg-green-500" : ""}
                `}
              onClick={() => setSelectedPlanilla(planilla)}
            >
              <span>{planilla.name}</span>
              <Image
                src="/images/arrow-right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center p-24">
        {selectedPlanilla?.name === "Bitacora" && (
          <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
            <div className="w-full">
              <ShowBitacora bitacora_anual={carrera.bitacora_anual} />

            </div>
          </div>
        )}
        {selectedPlanilla?.name === "Status" && (
          <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
            <div className="w-full">
              <ShowStatus carrera={carrera} />
            </div>
          </div>
        )}
        {selectedPlanilla?.name === "Historico" && (
          <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
            <div className="w-full">
              <ShowHistorico historico={carrera.historico} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
