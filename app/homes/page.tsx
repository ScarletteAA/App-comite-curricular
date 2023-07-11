
import { Sidebar } from '@/components/Sidebar';
import { History } from '@/components/History';
import Link from 'next/link';
import { Sede } from '@/interfaces';
import axios from 'axios';
import { ShowSedes } from '@/components/ShowSedes';

async function getSedes(): Promise<Sede[]> {
    const response = await axios.get(process.env.API_URL + '/sede')
    return response.data
}
//obtener la asesora que esta logeada y mostrar sus datos
const Homes = async () => {
    const sedes: Sede[] = await getSedes();
    return <>
        <div className="flex flex-row h-screen w-screen">
            <Sidebar />
            <ShowSedes sedes={sedes} />
            <History />
        </div >

    </>
}

export default Homes


