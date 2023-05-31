import type { T_AvaibleSizes } from "@/ts/product-view";
import Link from "next/link";

export default function AvaibleSizes({sizes,title}:T_AvaibleSizes){
    return (
        <div className="space-y-2">
            <h2 className="font-bold text-xl">{title}</h2>
            <ul className="flex items-center flex-wrap justify-start gap-1">
                {
                    sizes.map((size) => {
                        return (
                            <Link
                                className="px-3.5 py-1 bg-brand-walnut/12 hocus:bg-brand-walnut/22 duration-200 ease-in-out transition-colors shrink-0"
                                href="#"
                            >
                                {size}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}