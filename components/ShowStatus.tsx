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
        {carrera.asignaturas_claves.map((asignatura) => (
          <div key={asignatura.id}>
            <h1>{asignatura.asignatura.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowStatus;
