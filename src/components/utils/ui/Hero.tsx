import { Breadcrumbs } from "@/utils/ui";

export default function Hero(){
    return (
        <header
            className="bg-[color-mix(in_srgb,var(--color-brand-parchment)_97%,var(--color-brand-caramel))] min-h-[25vh] mb-4"
        >
            <section
                className="w-[1750px] max-w-8/10 mx-auto mt-24 mb-10 @container"
            >
                <Breadcrumbs
                    breadcrumbs={[
                        {
                            href:'/rynek',
                            label:'Rynek'
                        },
                        {
                            href:'/rynek/konie',
                            label:'Konie'
                        },
                        {
                            href:'/rynek/konie/sprzedaz',
                            label:'Sprzedaz'
                        },
                        {
                            href:'/rynek/konie/sprzedaz/sportowe',
                            label:'Sportowe'
                        },
                        {
                            href:'/rynek/onie/sprzedaz/sportowe/skoki',
                            label:'Skoki'
                        },
                    ]}
                />
                <h1
                    className="text-5xl-plus leading-none text-balance font-extrabold text-black @sm4:text-7xl @md1:text-8xl-plus @md6:text-9xl-plus"
                >hero</h1>
                <strong
                    className="mt-5 block text-sm text-balance leading-relaxed @md1:text-base @md6:text-xl"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facere earum fuga quia, sapiente, quos cupiditate, est corporis dolorum doloribus voluptas maiores impedit omnis tempora et ea aperiam id enim.
                </strong>
            </section>
        </header>
    )
}