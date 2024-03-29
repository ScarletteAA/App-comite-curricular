"use client";
import { ProfileData } from '@/interfaces';
import Link from 'next/link'
import React from 'react'



export const Sidebar = () => {
    const [profile, setProfile] = React.useState<ProfileData>()

    React.useEffect(() => {
        const getProfile = async () => {
            const res = await fetch('http://localhost:3000/api/profile')
            const data = await res.json()
            setProfile(data)
        }
        getProfile()
    }, [])

    return (
        <div className="bg-slate-100 h-screen text-slate-300         selection:bg-blue-600 selection:text-white
        ">
            <div className="flex flex-col">
                <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-screen ">
                    <div id="logo" className="my-4 px-6">
                        <h1 className="text-lg md:text-2xl font-bold text-white">Inicio<span className="text-blue-500"></span></h1>

                    </div>
                    <div id="profile" className="px-6 py-10">
                        <p className="text-slate-500">Welcome back,</p>
                        <a href="#" className="inline-flex space-x-2 items-center">
                            <span>
                                <img className="rounded-full w-8 h-8" src="https://www.softzone.es/app/uploads/2018/04/guest.png" alt=""></img>
                            </span>
                            <span className="text-sm md:text-base font-bold">
                                {profile?.name}
                            </span>
                        </a>
                    </div>
                    <div id="nav" className="w-full px-6">
                        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>

                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold leading-5 text-white">Planillas</span>
                                <span className="text-sm text-white/50 hidden md:block">por sede</span>
                            </div>
                        </a>
                        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-slate-300 font-bold leading-5">Planillas</span>
                                <span className="text-sm text-slate-500 hidden md:block">generales</span>
                            </div>
                        </a>
                        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-slate-300 font-bold leading-5">Informe</span>
                                <span className="text-sm text-slate-500 hidden md:block">generar informe</span>
                            </div>
                        </a>

                        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-slate-300 font-bold leading-5">Settings</span>
                                <span className="text-sm text-slate-500 hidden md:block">Edit App Settings</span>
                            </div>
                        </a>
                        <Link href="/homes/logout" className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150">
                            <div>

                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-slate-300 font-bold leading-5">Logout</span>

                            </div>
                        </Link>


                    </div>
                </div>


            </div>

        </div>
    )
}
