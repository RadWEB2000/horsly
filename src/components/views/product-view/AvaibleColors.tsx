import type { T_AvaibleColors } from "@/ts/product-view";
import Link from "next/link";

export default function AvaibleColors({colors,title}:T_AvaibleColors){
    return (
        <div
            className="space-y-2"
        >
            <h2 className="font-bold text-xl">{title}</h2>
            <ul
                className="flex items-center flex-wrap justify-start gap-1.5"
            >
                {
                    colors.map((color) => {
                        return (
                            <Link
                                className="size-10 rounded-full ring-2 hover:scale-95 duration-200 ease-in transition-all shrink-0"
                                href='#'
                                style={{
                                    backgroundColor:color
                                }}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}