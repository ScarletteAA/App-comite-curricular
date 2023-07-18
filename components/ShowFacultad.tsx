"use client";
import axios from "axios";
import usePopup from "@/hooks/usePopup";
import { Facultad, Sede } from "@/interfaces";
import { useState } from "react";
import ShowCarreras from "./ShowCarreras";
import { useRouter } from "next/navigation";

interface Props {
  sede: Sede;
}

const ShowFacultad: React.FC<Props> = ({ sede }) => {
  const router = useRouter();
  const [selectedFacultad, setSelectedFacultad] = useState<Facultad>();
  const { showPopup, handleHidePopup, handleShowPopup } = usePopup();

  const handleShowCarreras = (facultad: Facultad) => {
    setSelectedFacultad(facultad);
    console.log(facultad.carreras);
    handleShowPopup();
  };

  const handleBackClick = () => {
    router.push("/homes");
  };

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-screen h-screen">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {sede?.name}
        </h1>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-2xl font-bold text-gray-900">Facultades</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-4">
            {sede?.facultades.map((facultad, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <button
                  className="px-4 py-5 sm:px-6"
                  onClick={() => handleShowCarreras(facultad)}
                >
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {facultad.name}
                  </h3>
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-900 hover:bg-black hover:text-white"
          onClick={handleBackClick}
        >
          Volver al Home
        </button>
      </div>
      {selectedFacultad && showPopup && (
        <ShowCarreras
          selectedFacultad={selectedFacultad}
          handleHidePopup={handleHidePopup}
        />
      )}
    </>
  );
};
export default ShowFacultad;
