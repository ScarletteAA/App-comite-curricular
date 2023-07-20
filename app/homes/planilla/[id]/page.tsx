import ShowPlanillas from "@/components/ShowPlanillas";
import axios from "axios";

const getCarrera = async (id: string) => {
  const res = await axios.get("http://localhost:3000/api/carrera/" + id);
  return res.data;
};
const getAsesoras = async () => {
  const res = await axios.get("http://localhost:3000/api/asesora");
  return res.data;
};
const getSeguimientos = async () => {
  const res = await axios.get("http://localhost:3000/api/seguimiento");
  return res.data;
};
const getEvaluaciones = async () => {
  const res = await axios.get("http://localhost:3000/api/evaluacion");
  return res.data;
};
const getAsignaturas = async () => {
  const res = await axios.get("http://localhost:3000/api/asignatura");
  return res.data;
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const carrera = await getCarrera(id);
  const asesoras = await getAsesoras();
  const seguimientos = await getSeguimientos();
  const evaluaciones = await getEvaluaciones();
  const asignaturas = await getAsignaturas();
  return (
    <ShowPlanillas
      carrera={carrera}
      asesoras={asesoras}
      seguimientos={seguimientos}
      evaluaciones={evaluaciones}
      asignaturas={asignaturas}
    />
  );
};

export default Page;
