import brands from "@/static/products-brands.json"
import Link from "next/link"

export default function Brands(){
    return (
        <div
            className="space-y-2"
        >
            <h2
                className="text-2xl-plus font-semibold"
            >Popularne marki</h2>
            <ul
                className="flex flex-col gap-1 max-h-75 overflow-y-scroll"
            >
                {
                    brands.map(({label,uri}) => {
                        return (
                            <Link
                                className="hover:underline"
                                href={uri}
                                key={label}
                            >
                                {label}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}