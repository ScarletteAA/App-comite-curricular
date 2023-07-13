import ShowFacultad from "@/components/ShowFacultad";
import axios from "axios";

const getSede = async (id: string) => {
  const res = await axios.get("http://localhost:3000/api/sede/" + id);
  return res.data;
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const sede = await getSede(id);
  return <ShowFacultad sede={sede} />;
};
export default Page;
