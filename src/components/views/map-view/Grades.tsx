'use client'

import { useState } from "react";

export default function Grades(){

    const [grade,setGrade] = useState<number|string>(0);

    return (
        <div
            className="space-y-2"
        >
            <h2
                className="text-2xl-plus font-semibold"
            >Oceny</h2>
            <div
                className="inline-flex w-full gap-2"
            >
                <input defaultValue={3.5} onInput={(e) => setGrade(e.currentTarget.value)} className="w-[calc(100%-20px)] accent-brand-olive" step={0.1} type="range" name="grade" id="grade"  min={0} max={5} />
                <output className="w-5" id="grade">{grade}</output>
            </div>
        </div>
    )
}