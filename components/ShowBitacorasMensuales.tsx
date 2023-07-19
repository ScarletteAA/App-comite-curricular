"use client";

import { Asignaturas_claves, Bitacora_anual } from "@/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  bitacora_anual: Bitacora_anual;
}

const ShowBitacorasMensuales: React.FC<Props> = ({ bitacora_anual }) => {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>Bitacoras mensuales</h1>
        {bitacora_anual.bitacora_mensual.map((bitacora) => (
          <div key={bitacora.id}>
            <h1>{bitacora.mes}</h1>
          </div>
        ))}
      </div>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Asignaturas Criticas</th>
            </tr>
          </thead>
          <tbody>
            {bitacora_anual.asignaturas_criticas.map((asignatura) => (
              <tr key={asignatura.id}>
                <td>
                  <button>{asignatura.asignatura.name}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
        onClick={() => {
          router.back();
        }}
      >
        Salir
      </button>
    </>
  );
};
export default ShowBitacorasMensuales;
