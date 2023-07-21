import React from "react";
import { HistoryItem } from "./HistoryItem";
import { history } from "@/app/config/interface";
import { Historial } from "@/interfaces";

interface Props {
  history: Historial[];
}

export const History: React.FC<Props> = ({ history }) => {
  const changes: history[] = [
    {
      sede: "Antofagasta",
      description:
        'Se agrego el campo de "Fecha de nacimiento" en el formulario de registro',
      facultad: "",
      date: "2021-09-01",
      username: "Juan Perez",
    },
    {
      sede: "Coquimbo",
      facultad: "",
      description:
        'Se agrego el campo de "Fecha de nacimiento" en el formulario de registro',
      date: "2021-09-01",
      username: "Juan Perez",
    },
  ];

  return (
    <div>
      <div
        className="bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white right-0 
            "
      >
        <div className="flex flex-col">
          <div id="menu" className="bg-gray-900  text-slate-300 w-64 h-screen">
            <div id="logo" className="my-4 px-6">
              <h1 className="text-lg md:text-2xl font-bold text-white">
                Historial de cambios<span className="text-blue-500"></span>
              </h1>
            </div>
            <div className="w-full px-6">
              {history.map((change, index) => {
                return <HistoryItem key={index} history={change} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
