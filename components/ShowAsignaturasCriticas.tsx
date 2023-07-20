"use client";

import { Asignaturas_criticas } from "@/interfaces";

interface Props {
  asignaturas_criticas: Asignaturas_criticas[];
}

const ShowAsignaturasCriticas: React.FC<Props> = ({ asignaturas_criticas }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-11 my-4 bg-gray-100 rounded-md">
        {asignaturas_criticas.map((asignatura) => (
          <div key={asignatura.asignatura.id}>
            <h1>{asignatura.asignatura.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAsignaturasCriticas;
