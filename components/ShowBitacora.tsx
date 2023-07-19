'use client';

import usePopup from "@/hooks/usePopup";
import { Bitacora_anual } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  bitacora_anual: Bitacora_anual[];
}

const ShowBitacora: React.FC<Props> = ({ bitacora_anual }) => {
  const [name, setName] = useState<string>('John');
  const { showPopup, handleShowPopup, handleHidePopup } = usePopup();
  const router = useRouter();
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Bitacoras anuales</th>

            </tr>
          </thead>
          <tbody>
            {bitacora_anual.map((bitacora) => (

              <tr key={bitacora.id}>
                <td>
                  <button onClick={() => {
                    router.push(
                      "/homes/bitacorasMensuales/" + bitacora.id
                    );
                  }}>{bitacora.year}</button>
                </td>
              </tr>


            ))}

          </tbody>
        </table>
        {showPopup && <div
          className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-500 bg-opacity-75 '
        >
          <input type="text" value={name} onChange={(e) => {
            setName(e.target.value);
          }} />
          <button onClick={() => {
            handleHidePopup();
          }}>Cerrar</button>
        </div>}
      </div>
    </div>
  );
};
export default ShowBitacora;
