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
import usePopup from "@/hooks/usePopup";
import CreateNewBitacora from "./CreateNewBitacora";
import { BaseNavbar } from "./BaseNavbar";

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
  const { showPopup, handleHidePopup, handleShowPopup } = usePopup();
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

  const handleCreateBitacora = () => {
    handleShowPopup();
  };

  return (
    <main className="flex flex-col  h-screen w-screen">
      <BaseNavbar title={carrera.name} />
      <div className="px-2">
        <h1 className="text-2xl font-bold">
          Selecciona una opción para visualizar las planillas:{" "}
        </h1>
        <ul className="flex flex-wrap gap-4">
          {planillas.map((planilla) => (
            <li
              key={planilla.id}
              className={`flex items-center justify-center p-6 my-4 bg-gray-100 rounded-md
                  ${selectedPlanilla?.id === planilla.id ? "bg-green-500" : ""}
            cursor-pointer hover:bg-green-500`}
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
      <div className="flex flex-col h-full w-full">
        {selectedPlanilla?.name === "Bitacora" && (
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded-md
            h-full w-full
          ">
            <div className="w-full">
              <ShowBitacora bitacora_anual={carrera.bitacora_anual} />
            </div>
            <button
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
              onClick={handleCreateBitacora}
            >
              Crear nueva bitacora
            </button>
          </div>
        )}
        {selectedPlanilla?.name === "Status" && (
          <div className="flex items-center justify-center p-8 h-full bg-gray-100 rounded-md">
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
          <div className="flex items-center justify-center h-full p-8 bg-gray-100 rounded-md">
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
      {showPopup && (
        <CreateNewBitacora
          handleHidePopup={handleHidePopup}
          id_carrera={carrera.id}
          nombre_carrera={carrera.name}
        />
      )}
    </main>
  );
};

export default Home;
