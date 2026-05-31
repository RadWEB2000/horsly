import Link from "next/link";
import shoes from "@/img/product-boots.webp"
import Image from "next/image";

export default function RegularProductCard(){
    return (
        <Link
            className="group"
            href="/produkty/124"
        >
            <div
                className="relative mb-2 aspect-4/5 overflow-hidden rounded-lg"
            >
                <Image
                    alt=""
                    className=" max-w-7/10 top-2 left-2 object-contain absolute z-3"
                    height={320}
                    src="https://koniarz.eu/skins/store_user/store_b58e4d4204487ba7dfef9eedbf580141_3/images/logo.png"
                    width={320}
                />
                <Image
                    alt=""
                    className="size-full object-cover group-hover:brightness-70 durtion-700 ease-in-out transition-all group-hover:scale-105"
                    {...shoes}
                />
            </div>
            <span
                className="bg-yellow-400 text-xs rounded px-2 py-1"
            >
                nowe
            </span>
            <span
                className="ml-2 bg-brand-stone/25 text-xs rounded px-2 py-1"
            >
                obuwie
            </span>
            <h3 className="text-lg text-balance font-semibold font-body">Premier Equine ochraniacze crossowe Carbon tył czarne</h3>
            <data className="text-end text-sm text-brand-coffee w-full block" value="2499.99">
                2499.99 zł
            </data>
        </Link>
    )
}