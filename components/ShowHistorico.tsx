"use client";

import { Historico } from "@/interfaces";

interface Props {
  historico: Historico;
}

const ShowHistorico: React.FC<Props> = ({ historico }) => {
  return (
    <div>
      <h1>Historico</h1>
      <h1>{historico?.ultimo_rediseno}</h1>
      <h1>{historico?.ultimo_ajuste_mayor}</h1>
      <h1>{historico?.ultimo_ajuste_menor}</h1>
      <h1>{historico?.fecha_resolucion_dgpre}</h1>
      <h1>{historico?.administradora_dgpre}</h1>
      <h1>{historico?.anos_ultimo_ajuste}</h1>
      <h1>{historico?.numero_redisenos}</h1>
      <h1>{historico?.asesora.name}</h1>
      <h1>{historico?.observaciones}</h1>
    </div>
  );
};
export default ShowHistorico;
