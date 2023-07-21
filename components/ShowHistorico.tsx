"use client";

import { Historico } from "@/interfaces";

interface Props {
  historico: Historico;
}

const ShowHistorico: React.FC<Props> = ({ historico }) => {
  return (
    <div>
      <h1 className="font-bold">Historico</h1>
      <h1>Ultimo rediseño: {historico?.ultimo_rediseno}</h1>
      <h1>Ultimo ajuste mayor: {historico?.ultimo_ajuste_mayor}</h1>
      <h1>Ultimo ajuste menor: {historico?.ultimo_ajuste_menor}</h1>
      <h1>Fecha resolucion DGPRE: {historico?.fecha_resolucion_dgpre}</h1>
      <h1>Administradora DGPRE: {historico?.administradora_dgpre}</h1>
      <h1>Años ultimo rediseño: {historico?.anos_ultimo_ajuste}</h1>
      <h1>Numero de rediseños: {historico?.numero_redisenos}</h1>
      <h1>Asesora DIDDEC: {historico?.asesora.name}</h1>
      <h1>Observaciones: {historico?.observaciones}</h1>
    </div>
  );
};
export default ShowHistorico;
