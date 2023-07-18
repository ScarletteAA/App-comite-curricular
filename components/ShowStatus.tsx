"use client";

import { Carrera } from "@/interfaces";
import React from "react";

interface Props {
  carrera: Carrera;
}

const ShowStatus: React.FC<Props> = ({ carrera }) => {
  return (
    <div>
      <p>{carrera.comite.valueOf()}</p>
      {carrera.fases.map((fase) => (
        <div>
          {fase.seguimiento.nombre_fase}
          {fase.evaluacion.nombre_fase}
        </div>
      ))}
    </div>
  );
};
export default ShowStatus;
