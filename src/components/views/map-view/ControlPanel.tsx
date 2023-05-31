'use client'

import { FiltersIcon } from "@/assets/svgr"
import { useState } from "react"

export default function ControlPanel(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <button
                className="inline-flex items-center gap-2 px-4 py-2 border-2 rounded-3xl hover:bg-brand-caramel/37 duration-200 ease-in-out transition-all"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <FiltersIcon
                    className="size-4 fill-black *:fill-black"
                />
                <span>
                    Filtry
                </span>
            </button>
        </>
    )
}