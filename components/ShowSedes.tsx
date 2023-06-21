import { Sede } from '@/interfaces';
import Link from 'next/link'
import React from 'react'

interface Props {
    sedes: Sede[];
}

export const ShowSedes: React.FC<Props> = ({ sedes }) => {

    return (
        <div className="group relative">

            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://www.noticias.ucn.cl/wp-content/uploads/2020/01/Casa-Central-UCN.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center"></img>
            </div>
            {sedes.map((sede) => (

                <div className="mt-4 flex items-start justify-between">
                    <div>
                        <h3 className="text-sm text-gray-500">
                            <Link
                                href="/sedes/antofagasta"
                            >
                                <span className="absolute inset-0"></span>
                                Sede
                            </Link>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">{sede.name}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}
