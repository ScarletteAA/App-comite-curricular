import React from 'react'

interface Props {
    sede: string;
    facultad: String
    description: string;
    date: string;
    username: string;
}
export const HistoryItem: React.FC<Props> = ({
    sede,
    facultad,
    description,
    date,
    username
}) => {
    return (
        <>
            <div className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                <div className="flex flex-col">
                    <span className="text-m text-slate-300">{sede}</span>
                    <span className="text-m text-slate-300">{facultad}</span>
                    <span className="text-sm text-slate-300">{description}</span>
                    <span className="text-xs text-slate-300">{date}</span>
                    <span className="text-xs text-slate-300">{username}</span>
                </div>
            </div>
        </>

    )
}
