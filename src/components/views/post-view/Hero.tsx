import Image from "next/image";
import img from "@/img/post-image.webp"
export default function Hero(){
    return (
        <header
            className="bg-[color-mix(in_srgb,var(--color-brand-parchment)_97%,var(--color-brand-caramel))] min-h-[45vh] mb-40"
        >
            <div
                className="w-[1150px] max-w-8/10 mx-auto mt-4 @container"
            >
                <h1
                    className="text-5xl-plus leading-none text-balance font-extrabold text-black @sm4:text-7xl @md1:text-8xl-plus @md6:text-9xl-plus"
                >Jak wybrać pierwszą stajnię do nauki jazdy konnej?</h1>
                <strong
                    className="mt-5 block text-sm text-balance leading-relaxed @md1:text-base @md6:text-xl"
                >
                    Jak wybrać pierwszą stajnię do nauki jazdy konnej? Sprawdź, na co zwrócić uwagę przed zapisaniem się na pierwsze lekcje jazdy konnej — od bezpieczeństwa i instruktorów po konie szkoleniowe i atmosferę.
                </strong>
                <Image
                    alt='Hero img'
                    className="translate-y-10 brightness-95 rounded-lg w-full aspect-video object-cover"
                    {...img}
                />
            </div>
        </header>
    )
}