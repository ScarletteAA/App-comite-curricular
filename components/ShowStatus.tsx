"use client";

import { Carrera } from "@/interfaces";
import React from "react";

interface Props {
  carrera: Carrera;
}

const ShowStatus: React.FC<Props> = ({ carrera }) => {
  return (
    <div>
      <div>
        <h1
          className="font-bold"
        >Asignaturas claves</h1>
        {carrera.asignaturas_claves.map((asignatura) => (
          <div key={asignatura.id}>
            <h1>{asignatura.asignatura.name}</h1>
          </div>
        ))}
      </div>
      <br />
      <div>
        <h1 className="font-bold">Fases</h1>
        {carrera.fases.map((fase) => (
          <div key={fase.id}>
            <h2>Seguimiento: {fase.seguimiento.nombre_fase}</h2>
            <h2>Evaluacion: {fase.evaluacion.nombre_fase}</h2>
          </div>
        ))}
      </div>
      <br />
      <div>
        <h1 className="font-bold">Estado comite</h1>
        {carrera.comite === true ? (
          <h1>Comite activo</h1>
        ) : (
          <h1>Comite inactivo</h1>
        )}
      </div>
    </div>
  );
};
export default ShowStatus;
