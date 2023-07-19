import ShowBitacorasMensuales from "@/components/ShowBitacorasMensuales";
import axios from "axios";

const getBitacoraAnual = async (id: string) => {
    const res = await axios.get(`http://localhost:3000/api/bitacora_anual/${id}`);
    return res.data;
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const bitacora_anual = await getBitacoraAnual(id);

    return (
        <div>
            <ShowBitacorasMensuales bitacora_anual={bitacora_anual} />
        </div>
    )
}
export default Page;