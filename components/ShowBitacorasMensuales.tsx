"use client";

import {
  Asignatura,
  Asignaturas_claves,
  Bitacora_anual,
  Bitacora_mensual,
} from "@/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ShowAsignaturasCriticas from "./ShowAsignaturasCriticas";
import EditAsignaturasCriticas from "./EditAsignaturasCriticas";
import usePopup from "@/hooks/usePopup";
import PopupBitacoraMensual from "./PopupBitacoraMensual";

interface Props {
  bitacora_anual: Bitacora_anual;
  asignaturas: Asignatura[];
}

const ShowBitacorasMensuales: React.FC<Props> = ({
  bitacora_anual,
  asignaturas,
}) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [selectedMes, setSelectedMes] = useState<Bitacora_mensual>();
  const { showPopup, handleHidePopup, handleShowPopup } = usePopup();
  const router = useRouter();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleShowBitacoraMensual = (bitacora: Bitacora_mensual) => {
    setSelectedMes(bitacora);
    handleShowPopup();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="flex flex-row items-center justify-center w-screen p-24 space-x-4">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Bitacoras mensuales</h1>
          <div className="flex flex-col items-center justify-center p-4 my-4 bg-gray-100 rounded-md">
            {bitacora_anual.bitacora_mensual.map((bitacora) => (
              <div key={bitacora.id}>
                <button
                  onClick={() => {
                    handleShowBitacoraMensual(bitacora);
                  }}
                >
                  {bitacora.mes}
                </button>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="w-1/3">
          <h1 className="text-4xl font-bold">Asignaturas Criticas</h1>
          <div className="flex flex-col items-center justify-center p-16 my-4 bg-gray-100 rounded-md">
            <div className="h-1/2">
              {showEdit ? (
                <EditAsignaturasCriticas
                  asignaturas_criticas={bitacora_anual.asignaturas_criticas}
                  asignaturas={asignaturas}
                  id_bitacora_anual={bitacora_anual.id}
                  setShowEdit={setShowEdit}
                />
              ) : (
                <ShowAsignaturasCriticas
                  asignaturas_criticas={bitacora_anual.asignaturas_criticas}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <button
          className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
          onClick={() => {
            router.back();
          }}
        >
          Salir
        </button>
        <button
          className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
          onClick={handleEditClick}
        >
          Agregar asignatura critica
        </button>
      </div>
      {selectedMes && showPopup && (
        <PopupBitacoraMensual
          handleHidePopup={handleHidePopup}
          selectedMes={selectedMes}
        />
      )}
    </div>
  );
};
export default ShowBitacorasMensuales;
