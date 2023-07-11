"use client";
import { Facultad } from "@/interfaces";


interface Props {
    handleHidePopup: () => void;
    selectedFacultad: Facultad;

}

const ShowCarreras: React.FC<Props> = ({ handleHidePopup, selectedFacultad }) => {

    return (
        <div className="fixed z-10 h-screen w-screen flex item-center justify-center inset-0 bg-black bg-opacity-50">
            <div className="flex flex-row w-3/4 p-4 mt-4 bg-white rounded-lg h-3/4 sm:mx-auto">
                <div className="w-screen h-screen mx-10 mt-4">
                    <div className="sm:-mx-6 lg:-mx-10">
                        <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="border-b border-gray-200 shadow dark:border-gray-700 sm:rounded-lg ">
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <div className="flex flex-row justify-between bg-gray-50">
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                                                Carreras
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                                        {selectedFacultad.carreras.map((carrera, index) => (
                                            <div
                                                key={index}
                                                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"

                                            >
                                                <div className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-200">
                                                        {carrera.name}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleHidePopup}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8"
                    >
                        Cerrar
                    </button>
                </div>

            </div>

        </div>

    )



}
export default ShowCarreras;