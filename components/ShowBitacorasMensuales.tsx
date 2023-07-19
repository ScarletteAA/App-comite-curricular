'use client';

import { Asignaturas_claves, Bitacora_anual } from "@/interfaces";

interface Props {
    bitacora_anual: Bitacora_anual;
}


const ShowBitacorasMensuales: React.FC<Props> = ({ bitacora_anual }) => {

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

        </>
    )
}
export default ShowBitacorasMensuales;