import { CartIcon } from "@/assets/svgr";
import type { T_BuyButton } from "@/ts/utils";
import Link from "next/link";

export default function BuyButton({href,label,...props}:T_BuyButton){
    return (
        <Link
            className="bg-brand-coffee rounded-lg duration-200 ease-in-out transition-all hocus:shadow-2xl active:scale-95 min-h-14 hocus:bg-brand-olive inline-flex w-fit items-center py-3 px-8"
            href={href}
            target="_blank"
            rel="noindex nofollow"
            {...props}
        >
            <span
                className="text-brand-porcelain uppercase font-bold"
            >{label}</span>
            <span
                className="w-px h-full block bg-brand-porcelain ml-7 mr-2"
            />
            <CartIcon
                className="size-7 fill-brand-porcelain"
            />
        </Link>
    )
}