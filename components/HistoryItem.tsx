"use client";

import { Historial } from "@/interfaces";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  history: Historial;
}
export const HistoryItem: React.FC<Props> = ({ history }) => {
  const [selectedCarrera, setSelectedCarrera] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const router = useRouter();

  const handleSelectedCarrera = (id_carrera: string) => {
    setSelectedCarrera(id_carrera);
    setDisabled(true);
    router.push("http://localhost:3000/homes/planilla/" + id_carrera);
  };

  return (
    <>
      <div className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
        <button
          className="flex flex-col"
          onClick={() => handleSelectedCarrera(history.id_carrera)}
          disabled={disabled}
        >
          <span className="text-sm text-slate-300">{history.descripcion}</span>
          <span className="text-xs text-slate-300">{history.fecha}</span>
        </button>
      </div>
    </>
  );
};
