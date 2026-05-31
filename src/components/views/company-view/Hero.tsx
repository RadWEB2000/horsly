import { LocationIcon, NetworkIcon, StarIcon } from "@/assets/svgr"
import { Breadcrumbs } from "@/utils/ui"
import barn from "@/img/horse-barn.webp"
import Image from "next/image"
import Link from "next/link"

export default function Hero(){
    return (
        <header
            className="w-[1250px] mt-10 max-w-8/10 mx-auto grid grid-cols-[3fr_2fr] gap-7 items-center"
        >
            <Breadcrumbs
                breadcrumbs={[
                    {
                        href:'/blog',
                        label:'Blog'
                    },
                    {
                        href:'/blog/#',
                        label:'Jak wybrać pierwszą stajnię do nauki jazdy konnej?'
                    }
                ]}
            />
            <Image
                alt=""
                className="aspect-16/6 object-cover brightness-90 rounded-xl"
                {...barn}
            />
            <section>
                <h1
                    className="text-7xl leading-none font-bold mb-6"
                >Stajnia Idmar Krajkowo</h1>
                <strong
                    className="block text-balance font-medium text-sm-plus"
                >Konie zagościły w naszym życiu dzięki pasji powożenia. Wiele nagród uzyskanych w tej dziedzinie na przestrzeni lat zarówno na konkursach w Polsce jak i po za jej granicami dało nam olbrzymią satysfakcję.</strong>
                <div
                    className="flex flex-row flex-wrap items-center justify-start gap-6 mt-6"
                >
                    <p
                        className="inline-flex items-center gap-3"
                    >
                        <LocationIcon
                            className="size-6"
                        />
                        <span className="leading-none">Krajkowo 1A, 62-050 Mosina</span>
                    </p>
                    <p
                        className="inline-flex items-center gap-3"
                    >
                        <StarIcon
                            className="size-6"
                        />
                        <span className="leading-none">4.9/5</span>
                    </p>
                    <Link
                        className="inline-flex items-center gap-3"
                        href="https://stajniakrajkowo.pl/"
                        target="_blank"
                        rel="noindex nofollow"
                    >
                        <NetworkIcon
                            className="size-6"
                        />
                        <span className="leading-none">
                            stajniakrajkowo.pl
                        </span>
                    </Link>
                </div>
            </section>
            <iframe className="w-full min-h-82 rounded-xl h-full row-start-2 row-end-4 col-start-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.2695196172726!2d16.956729726661813!3d52.202149471979524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045525deb78069%3A0xdbf4e444cf307db5!2sRiding%20Center%20IDMAR%20Krajkowo!5e0!3m2!1spl!2spl!4v1780213299914!5m2!1spl!2spl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </header>
    )
}