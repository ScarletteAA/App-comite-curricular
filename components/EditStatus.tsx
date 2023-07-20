"use client";

import { Asignatura, Carrera, Evaluacion, Seguimiento } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  carrera: Carrera;
  seguimientos: Seguimiento[];
  evaluaciones: Evaluacion[];
  asignaturas: Asignatura[];
  setShowEdit: (showEdit: boolean) => void;
}

const EditStatus: React.FC<Props> = ({
  carrera,
  seguimientos,
  evaluaciones,
  asignaturas,
  setShowEdit,
}) => {
  const [estadoComite, setEstadoComite] = useState<boolean>(carrera.comite);
  const [selectedSeguimiento, setSelectedSeguimiento] = useState<string>(
    carrera.fases[0].seguimiento.id
  );
  const [selectedEvaluacion, setSelectedEvaluacion] = useState<string>(
    carrera.fases[0].evaluacion.id
  );
  const [selectedAsignatura, setSelectedAsignatura] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setDisabled(true);
    const comite = await axios.patch("http://localhost:3000/api/carrera", {
      id: carrera.id,
      comite_estado: estadoComite,
    });
    const fases = await axios.patch("http://localhost:3000/api/fases_carrera", {
      id: carrera.fases[0].id,
      id_seguimiento: selectedSeguimiento,
      id_evaluacion: selectedEvaluacion,
    });
    const existe = carrera.asignaturas_claves.find((asignatura) => {
      asignatura.asignatura.id === selectedAsignatura;
    });
    if (existe === undefined && selectedAsignatura !== "") {
      const asignatura = await axios.post(
        "http://localhost:3000/api/asignaturas_claves",
        {
          id_carrera: carrera.id,
          id_asignatura: selectedAsignatura,
        }
      );
    }
    router.refresh();
    setShowEdit(false);
    setDisabled(false);
  };

  return (
    <div>
      <div>
        <h1>Editar status</h1>
        <h1>Asignaturas claves</h1>
        {carrera.asignaturas_claves.map((asignatura) => (
          <div key={asignatura.id}>
            <h1>{asignatura.asignatura.name}</h1>
          </div>
        ))}
        <h1>
          Nueva asignatura clave:{" "}
          <select
            name=""
            id=""
            defaultValue={asignaturas[0].id}
            onChange={(e) => setSelectedAsignatura(e.target.value)}
          >
            {asignaturas.map((asignatura) => (
              <option value={asignatura.id}>{asignatura.name}</option>
            ))}
          </select>
        </h1>
      </div>
      <br />
      <div>
        <h1>Fases</h1>
        {carrera.fases.map((fase) => (
          <div key={fase.id}>
            <h2>
              Seguimiento:{" "}
              <select
                name=""
                id=""
                defaultValue={carrera.fases[0].seguimiento.id}
                onChange={(e) => setSelectedSeguimiento(e.target.value)}
              >
                {seguimientos.map((seguimiento) => (
                  <option value={seguimiento.id}>
                    {seguimiento.nombre_fase}
                  </option>
                ))}
              </select>
            </h2>
            <h2>
              Evaluacion:{" "}
              <select
                name=""
                id=""
                defaultValue={carrera.fases[0].evaluacion.id}
                onChange={(e) => setSelectedEvaluacion(e.target.value)}
              >
                {evaluaciones.map((evaluacion) => (
                  <option value={evaluacion.id}>
                    {evaluacion.nombre_fase}
                  </option>
                ))}
              </select>
            </h2>
          </div>
        ))}
      </div>
      <br />
      <div>
        <h1>
          Estado comite{" "}
          <select
            name=""
            id=""
            defaultValue={carrera.comite === true ? "true" : "false"}
            onChange={(e) => setEstadoComite(e.target.value === "true")}
          >
            <option value="false">Comite inactivo</option>
            <option value="true">Comite activo</option>
          </select>
        </h1>
      </div>
      <button
        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white
                    disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={disabled}
      >
        Guardar cambios
      </button>
    </div>
  );
};
export default EditStatus;
