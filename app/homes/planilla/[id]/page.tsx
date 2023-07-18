import ShowPlanillas from "@/components/ShowPlanillas";
import axios from "axios";

const getCarrera = async (id: string) => {
  const res = await axios.get("http://localhost:3000/api/carrera/" + id);
  return res.data;
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const carrera = await getCarrera(id);
  return <ShowPlanillas carrera={carrera} />;
};

export default Page;
