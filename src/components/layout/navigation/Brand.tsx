import Image from "next/image";
import Link from "next/link";
import logo from "@/img/logo.webp"

export default function Brand(){
    return (
        <Link className="inline-flex items-center" href='/'>
            <Image
                alt="logo"
                className="size-12"
                {...logo}
            />
            <span
                className="font-heading ml-2 text-4xl font-bold"
            >Horsia</span>
        </Link>
    )
}