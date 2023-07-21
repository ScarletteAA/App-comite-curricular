"use client";

import { Asesora, Historico } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  historico: Historico;
  asesoras: Asesora[];
  setShowEdit: (showEdit: boolean) => void;
}

const EditHistorico: React.FC<Props> = ({
  historico,
  asesoras,
  setShowEdit,
}) => {
  const [selectedAsesora, setSelectedAsesora] = useState<string>(
    historico.asesora.id
  );
  const [ultimoRediseno, setUltimoRediseno] = useState<string>(
    historico.ultimo_rediseno
  );
  const [ultimoAjusteMayor, setUltimoAjusteMayor] = useState<string>(
    historico.ultimo_ajuste_mayor
  );
  const [ultimoAjusteMenor, setUltimoAjusteMenor] = useState<string>(
    historico.ultimo_ajuste_menor
  );
  const [fechaResolucionDgpre, setFechaResolucionDgpre] = useState<string>(
    historico.fecha_resolucion_dgpre
  );
  const [administradoraDgpre, setAdministradoraDgpre] = useState<string>(
    historico.administradora_dgpre
  );
  const [anosUltimoAjuste, setAnosUltimoAjuste] = useState<number>(
    historico.anos_ultimo_ajuste
  );
  const [numeroRedisenos, setNumeroRedisenos] = useState<number>(
    historico.numero_redisenos
  );
  const [observaciones, setObservaciones] = useState<string>(
    historico.observaciones
  );
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async () => {
    setDisabled(true);

    const res = await axios.patch("http://localhost:3000/api/historico", {
      id: historico.id,
      ultimo_rediseno: ultimoRediseno,
      ultimo_ajuste_mayor: ultimoAjusteMayor,
      ultimo_ajuste_menor: ultimoAjusteMenor,
      fecha_resolucion_dgpre: fechaResolucionDgpre,
      admin_dgpre: administradoraDgpre,
      anos_ultimo_ajuste: anosUltimoAjuste,
      n_redisenos: numeroRedisenos,
      id_asesora: selectedAsesora,
      observaciones: observaciones,
    });
    const history = await axios.post("http://localhost:3000/api/history", {
      id_carrera: historico.carrera.id,
      descripcion:
        "Se actualizo la informacion del historico de la carrera: " +
        historico.carrera.name,
    });
    router.refresh();
    setShowEdit(false);
    setDisabled(false);
  };

  return (
    <div>
      <h1>Editar historico</h1>
      <h1>
        Ultimo rediseño:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.ultimo_rediseno}
          onChange={(e) => setUltimoRediseno(e.target.value)}
        ></input>
      </h1>
      <h1>
        Ultimo ajuste mayor:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.ultimo_ajuste_mayor}
          onChange={(e) => setUltimoAjusteMayor(e.target.value)}
        ></input>
      </h1>
      <h1>
        Ultimo ajuste menor:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.ultimo_ajuste_menor}
          onChange={(e) => setUltimoAjusteMenor(e.target.value)}
        />
      </h1>
      <h1>
        Fecha resolucion DGPRE:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.fecha_resolucion_dgpre}
          onChange={(e) => setFechaResolucionDgpre(e.target.value)}
        />
      </h1>
      <h1>
        Administradora DGPRE:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.administradora_dgpre}
          onChange={(e) => setAdministradoraDgpre(e.target.value)}
        />
      </h1>
      <h1>
        Años ultimo rediseño:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.anos_ultimo_ajuste}
          onChange={(e) => setAnosUltimoAjuste(parseInt(e.target.value))}
        />
      </h1>
      <h1>
        Numero de rediseños:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.numero_redisenos}
          onChange={(e) => setNumeroRedisenos(parseInt(e.target.value))}
        />
      </h1>
      <h1>
        Asesora DIDDEC:{" "}
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name=""
          id=""
          onChange={(e) => {
            setSelectedAsesora(e.target.value);
          }}
          defaultValue={historico?.asesora.id}
        >
          {asesoras.map((asesora) => (
            <option value={asesora.id}>{asesora.name}</option>
          ))}
        </select>
      </h1>
      <h1>
        Observaciones:{" "}
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={historico?.observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />
      </h1>

      <div>
        <button
          className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white
                    disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};
export default EditHistorico;
