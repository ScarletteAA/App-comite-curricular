
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
        <div
            className="flex flex-row w-screen"
        >

            <Sidebar />
            <div>
                <div className="bg-gray-100">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                            <h2 className="text-2xl font-bold text-gray-900">Sedes</h2>
                            <ShowSedes sedes={sedes} />
                        </div>
                    </div>
                </div>
            </div>
            <History />

        </div >

    </>
}

export default Homes


