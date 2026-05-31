import Image from "next/image";
import Link from "next/link";
import barn from "@/img/horse-barn.webp"
import { LocationIcon, StarIcon } from "@/assets/svgr";
export default function RegularCompanyCard(){
    return (
        <Link
            className="space-y-2"
            href="/discover/stadnina-koni-krajkowo"
        >
            <Image
                alt=""
                className="aspect-square object-center overflow-clip rounded-xl object-cover"
                {...barn}
            />
            <section
                className="space-y-1 flex flex-col "
            >
                <span
                    className="text-xs-plus uppercase bg-brand-caramel/12 px-1.5 py-0.5 rounded w-fit"
                >Stadnina koni</span>
                <h3
                    className="text-xl font-semibold"
                >Stajnia Idmar Krajkowo</h3>
                <p
                    className="line-clamp-2 text-xs-plus"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam, provident quis ut corporis similique enim expedita</p>
                <div className="flex items-center justify-between *:inline-flex *:gap-0.5 *:items-center">
                    <p>
                        <LocationIcon className="size-3" />
                        <span className="text-sm" >Krajkowo</span>
                    </p>
                    <p>
                        <span className="text-sm" >3/5</span>
                        <StarIcon className="size-3" />
                    </p>
                </div>
            </section>
        </Link>
    )
}