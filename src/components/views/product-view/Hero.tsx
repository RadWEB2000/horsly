import saddle from "@/img/product-saddle.webp"
import Image from "next/image"
import {AvaibleSizes as Sizes, AvaibleColors as Colors} from "@/views/product-view"
import { BuyButton as Button } from "@/utils/buttons"
import { Breadcrumbs } from "@/utils/ui"

export default function Hero(){
    return (
        <header
            className="flex flex-col md4:grid grid-cols-2 w-[1450px] mt-20 mb-10 gap-10 max-w-8/10 mx-auto @container md4:items-center"
        >
            <Breadcrumbs
                breadcrumbs={[
                    {
                        href:'/rynek',
                        label:'Rynek'
                    },
                    {
                        href:'/rynek/124',
                        label:'Premier Equine ochraniacze crossowe Carbon tył czarne'
                    }
                ]}
            />
            <div>
                <Image
                    alt=''
                    className="rounded-xl aspect-16/18 object-cover brightness-90"
                    {...saddle}
                />
            </div>
            <div
                className="flex flex-col"
            >
                <Image
                    alt=""
                    className=" max-w-7/10 object-contain"
                    height={320}
                    src="https://koniarz.eu/skins/store_user/store_b58e4d4204487ba7dfef9eedbf580141_3/images/logo.png"
                    width={320}
                />
                <h1
                    className="text-3xl-plus text-balance font-extrabold leading-none mt-5 mb-2 @xs3:text-4xl-plus @sm3:text-5xl-plus @lg1:text-6xl-plus"
                >Premier Equine ochraniacze crossowe Carbon tył czarne</h1>
                <data className="text-2xl" value="2499.99">
                    2499,<sup>99</sup>zł
                </data>
                <p
                    className="text-balance text-sm text-neutral-500 mt-5 mb-6 @sm3:text-base"
                >
                    Te legginsy jeździeckie z pełnym lejem są wykonane z funkcjonalnego, oddychającego materiału i zaprojektowane tak, aby zapewnić lekkie i wygodne odczucie podczas noszenia. Perforowane obszary wspomagają cyrkulację powietrza i pomagają utrzymać zrównoważony mikroklimat podczas jazdy. Kieszenie na udach oferują miejsce na urządzenie mobilne, a dwa zatrzaski i szlufki na pasek dopełniają schludny, sportowy wygląd.
                </p>
                <Button
                    href='#'
                    label="Sprawdź"
                />
                <div
                    className="space-y-3 mt-6 grid grid-cols-1 @md6:grid-cols-2"
                >
                    <Colors
                        colors={[
                            '#780000',
                            '#C1121F',
                            '#FDF0D5',
                            '#003049',
                            '#669BBC'
                        ]}
                        title="Dostępne kolory"
                    />
                    <Sizes
                        title="Dostępne rozmiary"
                        sizes={[
                            '41',
                            '42',
                            '45',
                            '56',
                            '65',
                            '67',
                            '66'
                        ]}
                    />
                </div>
            </div>
        </header>
    )
}