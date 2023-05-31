import Image from "next/image";
import Link from "next/link";
import logo from "@/img/logo.webp"

export default function Brand(){
    return (
        <Link className="inline-flex items-center" href='/'>
            <Image
                alt="logo"
                className="size-16"
                {...logo}
            />
            <span
                className="font-heading text-4xl font-bold"
            >Horsly</span>
        </Link>
    )
}