'use client'

import { FiltersIcon } from "@/assets/svgr"
import { useEffect, useState } from "react"
import {AdditionalServices, Facilities, Grades, Industries, Location} from "@/views/map-view"

export default function ControlPanel(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            <button
                className="inline-flex items-center gap-2 px-4 py-2 border-2 rounded-3xl hover:bg-brand-caramel/37 duration-200 ease-in-out transition-all"
                onClick={() => setIsOpen(true)}
                type="button"
            >
                <FiltersIcon
                    className="size-4 fill-black *:fill-black"
                />
                <span>
                    Filtry
                </span>
            </button>
            {
                isOpen &&
                <div className="bg-black/22 backdrop-blur-[1.5px] fixed size-full top-0 left-0 z-9999 flex items-center justify-center" onClick={() => setIsOpen(false)}>
                    <div className="bg-brand-porcelain rounded-2xl shadow-xl w-[800px] max-w-11/12 mx-auto p-13 scrollbar-none overflow-y-scroll max-h-9/10 space-y-8" onClick={(e) => e.stopPropagation()}>
                        <Industries/>
                        <Location/>
                        <Grades/>
                        <AdditionalServices/>
                        <Facilities/>
                    </div>
                </div>
            }
        </>
    )
}