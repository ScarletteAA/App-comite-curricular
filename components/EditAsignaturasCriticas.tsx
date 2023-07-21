"use client";

import { Asignatura, Asignaturas_criticas } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  asignaturas_criticas: Asignaturas_criticas[];
  asignaturas: Asignatura[];
  id_bitacora_anual: string;
  id_carrera: string;
  nombre_carrera: string;
  nombre_bitacora: string;
  setShowEdit: (showEdit: boolean) => void;
}

const EditAsignaturasCriticas: React.FC<Props> = ({
  asignaturas_criticas,
  asignaturas,
  id_bitacora_anual,
  id_carrera,
  nombre_carrera,
  nombre_bitacora,
  setShowEdit,
}) => {
  const [selectedAsignatura, setSelectedAsignatura] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setDisabled(true);
    const existe = asignaturas_criticas.find((asignatura) => {
      asignatura.asignatura.id === selectedAsignatura;
    });
    if (existe === undefined && selectedAsignatura !== "") {
      const asignatura = await axios.post(
        "http://localhost:3000/api/asignaturas_criticas",
        {
          id_bitacora_anual: id_bitacora_anual,
          id_asignatura: selectedAsignatura,
        }
      );
      const history = await axios.post("http://localhost:3000/api/history", {
        id_carrera: id_carrera,
        descripcion:
          "Se agrego una asignatura critica a la bitacora " +
          nombre_bitacora +
          " para la carrera: " +
          nombre_carrera,
      });
    }
    router.refresh();
    setShowEdit(false);
    setDisabled(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center p-4 my-4 bg-gray-100 rounded-md">
        {asignaturas_criticas.map((asignatura) => (
          <div key={asignatura.asignatura.id}>
            <h1>{asignatura.asignatura.name}</h1>
          </div>
        ))}
      </div>
      <h1>
        Nueva asignatura critica:{" "}
        <select
          name=""
          id=""
          onChange={(e) => setSelectedAsignatura(e.target.value)}
        >
          {asignaturas.map((asignatura) => (
            <option value={asignatura.id}>{asignatura.name}</option>
          ))}
        </select>
      </h1>
      <button
        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
        disabled={disabled}
        onClick={handleSubmit}
      >
        Guardar cambios
      </button>
    </div>
  );
};

export default EditAsignaturasCriticas;
