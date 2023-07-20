"use client";

import ShowBitacora from "@/components/ShowBitacora";
import ShowHistorico from "@/components/ShowHistorico";
import ShowStatus from "@/components/ShowStatus";
import {
  Asesora,
  Asignatura,
  Carrera,
  Evaluacion,
  Seguimiento,
} from "@/interfaces";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import EditStatus from "./EditStatus";
import EditHistorico from "./EditHistorico";

interface Planilla {
  id: number;
  name: string;
}

interface Props {
  carrera: Carrera;
  asesoras: Asesora[];
  seguimientos: Seguimiento[];
  evaluaciones: Evaluacion[];
  asignaturas: Asignatura[];
}

const Home: React.FC<Props> = ({
  carrera,
  asesoras,
  seguimientos,
  evaluaciones,
  asignaturas,
}) => {
  const [selectedPlanilla, setSelectedPlanilla] =
    React.useState<Planilla | null>(null);

  const [showEdit, setShowEdit] = useState<boolean>(false);
  const router = useRouter();

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

  const handleBackClick = () => {
    router.back();
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

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
              onClick={() => {
                setSelectedPlanilla(planilla);
                setShowEdit(false);
              }}
            >
              <span>{planilla.name}</span>
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
              {showEdit ? (
                <EditStatus
                  carrera={carrera}
                  seguimientos={seguimientos}
                  evaluaciones={evaluaciones}
                  asignaturas={asignaturas}
                  setShowEdit={setShowEdit}
                />
              ) : (
                <ShowStatus carrera={carrera} />
              )}
            </div>
            <button
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
              onClick={handleEditClick}
            >
              Editar planilla
            </button>
          </div>
        )}
        {selectedPlanilla?.name === "Historico" && (
          <div className="flex items-center justify-center p-8 my-4 bg-gray-100 rounded-md">
            <div className="w-full">
              {showEdit ? (
                <EditHistorico
                  historico={carrera.historico}
                  asesoras={asesoras}
                  setShowEdit={setShowEdit}
                />
              ) : (
                <ShowHistorico historico={carrera.historico} />
              )}
            </div>
            <button
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
              onClick={handleEditClick}
            >
              Editar planilla
            </button>
          </div>
        )}
      </div>
      <button
        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
        onClick={handleBackClick}
      >
        Salir
      </button>
    </main>
  );
};

export default Home;
