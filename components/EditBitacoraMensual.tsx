"use client";

import { Bitacora_mensual } from "@/interfaces";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useState } from "react";

interface Props {
  selectedMes: Bitacora_mensual;
  setShowEdit: (showEdit: boolean) => void;
  router: AppRouterInstance;
  handleHidePopup: () => void;
}

const EditBitacoraMensual: React.FC<Props> = ({
  selectedMes,
  setShowEdit,
  router,
  handleHidePopup,
}) => {
  const [nSesionesPlanificadas, setNSesionesPlanificadas] = useState<number>(
    selectedMes.n_sesiones_planificadas
  );
  const [nSesionesRealizadas, setNSesionesRealizadas] = useState<number>(
    selectedMes.n_sesiones_realizadas
  );
  const [comentarios, setComentarios] = useState<string>(
    selectedMes.comentarios
  );
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSubmit = async () => {
    setDisabled(true);
    const res = await axios.patch(
      "http://localhost:3000/api/bitacora_mensual",
      {
        id: selectedMes.id,
        n_sesiones_planificadas: nSesionesPlanificadas,
        n_sesiones_realizadas: nSesionesRealizadas,
        comentarios: comentarios,
      }
    );
    router.refresh();
    setShowEdit(false);
    setDisabled(false);
    handleHidePopup();
  };

  return (
    <>
      <div className="border-b border-gray-200 shadow dark:border-gray-700 sm:rounded-lg ">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex flex-row justify-between bg-gray-50">
            <div className="flex flex-row items-center justify-between">
              <div className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                {selectedMes.mes}
              </div>
            </div>
          </div>
          <div className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="px-6 py-4 whitespace-nowrap">
                <h1>
                  Numero de sesiones planificadas:{" "}
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    defaultValue={selectedMes.n_sesiones_planificadas}
                    onChange={(e) => {
                      setNSesionesPlanificadas(parseInt(e.target.value));
                    }}
                  />
                </h1>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="px-6 py-4 whitespace-nowrap">
                <h1>
                  Numero de sesiones realizadas:{" "}
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    defaultValue={selectedMes.n_sesiones_realizadas}
                    onChange={(e) => {
                      setNSesionesRealizadas(parseInt(e.target.value));
                    }}
                  />
                </h1>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="px-6 py-4 whitespace-nowrap">
                <h1>
                  Comentarios:{" "}
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    defaultValue={selectedMes.comentarios}
                    onChange={(e) => {
                      setComentarios(e.target.value);
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8 space-x-2"
        disabled={disabled}
        onClick={handleSubmit}
      >
        Guardar
      </button>
    </>
  );
};

export default EditBitacoraMensual;
