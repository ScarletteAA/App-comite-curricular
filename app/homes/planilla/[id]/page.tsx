import axios from "axios";

const getCarrera = async (id: string) => {
  const res = await axios.get("http://localhost:3000/api/carrera/" + id);
  return res.data;
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Planilla</h1>
    </div>
  );
};
