"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  handleHidePopup: () => void;
  id_carrera: string;
  nombre_carrera: string;
}

const CreateNewBitacora: React.FC<Props> = ({
  handleHidePopup,
  id_carrera,
  nombre_carrera,
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [nombre, setNombre] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (nombre != "") {
      setDisabled(true);
      const res = await axios.post("http://localhost:3000/api/bitacora_anual", {
        id_carrera: id_carrera,
        year: nombre,
      });
      const history = await axios.post("http://localhost:3000/api/history", {
        id_carrera: id_carrera,
        descripcion:
          "Se creo una nueva bitacora anual para la carrera: " + nombre_carrera,
      });
      router.refresh();
      handleHidePopup();
      setDisabled(false);
    }
  };

  return (
    <div className="fixed z-10 h-screen w-screen flex item-center justify-center inset-0 bg-black bg-opacity-50">
      <div className="flex flex-row w-3/4 p-4 mt-4 bg-white rounded-lg h-3/4 sm:mx-auto">
        <div className="w-screen h-screen mx-10 mt-4">
          <div className="sm:-mx-6 lg:-mx-10">
            <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="border-b border-gray-200 shadow dark:border-gray-700 sm:rounded-lg ">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="flex flex-row justify-between bg-gray-50">
                    <div className="flex flex-row items-center justify-between">
                      <div className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                        Nueva bitacora anual
                      </div>
                    </div>
                  </div>
                  <div className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <div className="px-6 py-4 whitespace-nowrap">
                        <h1>
                          Nombre de la bitacora:{" "}
                          <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleHidePopup}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8"
            disabled={disabled}
          >
            Cerrar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8 space-x-2"
            disabled={disabled}
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateNewBitacora;
