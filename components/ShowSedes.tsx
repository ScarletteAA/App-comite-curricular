'use client'
import { Sede } from '@/interfaces';
import React from 'react'
import { useSedeContext } from '@/Contexts/sedeContext';
import { sedeImages } from '@/constants';
import { useRouter } from 'next/navigation';
interface Props {
    sedes: Sede[];
}

export const ShowSedes: React.FC<Props> = ({ sedes }) => {
    const { setSede } = useSedeContext()!;
    const router = useRouter();
    const handleSelectedSede = (sede: Sede) => {
        setSede(sede);
        router.push("/homes/sede/" + sede.id)

    }

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-screen h-screen">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 className="text-2xl font-bold text-gray-900">Sedes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-4">
                    {sedes.map((sede, index) => (

                        <div className="mt-4 flex items-start justify-between cursor-pointer"
                            key={index}
                            onClick={() => handleSelectedSede(sede)}

                        >
                            <div>
                                <h3 className="text-sm text-gray-500">
                                    <span className=""></span>
                                    Sede
                                </h3>
                                <p className="text-base font-semibold text-gray-900">
                                    {sede.name}
                                </p>

                                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-white">
                                    <img src={sedeImages[sede.name.toLocaleLowerCase()]}
                                        className="h-full w-full object-cover object-center">

                                    </img>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
