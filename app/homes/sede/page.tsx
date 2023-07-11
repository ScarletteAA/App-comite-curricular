"use client";
import { useSedeContext } from '@/Contexts/sedeContext';


const Page = () => {
    const { sede } = useSedeContext()!;
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-screen h-screen">
            {sede?.name}
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h1 className="text-2xl font-bold text-gray-900">Facultades</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-4">
                    {sede?.facultades.map((facultad, index) => (
                        <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{facultad.name}</h3>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <div className="sm:divide-y sm:divide-gray-200">
                                    {facultad.carreras?.map((carrera, index) => (
                                        <div key={index} className="py-5 flex justify-between text-sm font-medium">
                                            <dt className="text-gray-500">Carrera</dt>
                                            <dd className="text-gray-900">{carrera.name}</dd>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}




                </div>


            </div>

        </div>
    )
}

export default Page;