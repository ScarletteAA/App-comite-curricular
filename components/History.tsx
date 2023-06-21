import React from 'react'
import { HistoryItem } from './HistoryItem';
import { history } from '@/app/config/interface';


export const History = () => {

    const changes: history[] = [
        {
            sede: "Antofagasta",
            description: 'Se agrego el campo de "Fecha de nacimiento" en el formulario de registro',
            facultad: "",
            date: '2021-09-01',
            username: 'Juan Perez'
        },
        {
            sede: "Coquimbo",
            facultad: "",
            description: 'Se agrego el campo de "Fecha de nacimiento" en el formulario de registro',
            date: '2021-09-01',
            username: 'Juan Perez'
        },
    ];
    return (
        <div >
            <div className="bg-slate-100 h-screen text-slate-300         selection:bg-blue-600 selection:text-white
            fixed top-0 right-0 w-64 h-screen flex flex-col justify-between
            ">
                <div className="flex flex-col">
                    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-screen ">
                        <div id="logo" className="my-4 px-6">
                            <h1 className="text-lg md:text-2xl font-bold text-white">Historial de cambios<span className="text-blue-500"></span></h1>
                        </div>
                        <div className="w-full px-6">
                            {
                                changes.map((change, index) => {
                                    return <HistoryItem
                                        key={index}
                                        sede={change.sede}
                                        facultad={change.facultad}
                                        description={change.description}
                                        date={change.date}
                                        username={change.username}
                                    />
                                }
                                )
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
