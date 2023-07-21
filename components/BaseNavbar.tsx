"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
interface Props {
    title: string;
}

export const BaseNavbar: React.FC<Props> = ({ title }) => {
    const router = useRouter()

    const handleBackClick = () => {
        router.back()
    }
    return (
        <>
            <div className="text-white  h-20 flex items-center justify-center
                bg-gray-900 
            ">
                <div className="flex items-center justify-between w-full px-6">
                    <button
                        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-4 bg-gray-800 hover:bg-black hover:text-white"
                        onClick={handleBackClick}
                    >Volver</button>
                </div>
                <div className="flex items-center justify-between w-full px-6">
                    <h1 className="text-2xl font-medium">{title.toUpperCase()}</h1>
                </div>
            </div>

        </>
    )
}