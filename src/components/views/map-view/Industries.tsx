import { HorseIcon } from "@/assets/svgr";
import Link from "next/link";

const industries = [
    'Sport i rekreacja',
    'Turystyka konna',
    'Hodowla',
    'Weterynaria',
    'Ubezpieczenia',
    'Kowalstwo i pielęgnacja',
    'Infrastruktura',
    'Sklep',
    'Żywienie',
    'Transport',
    'Zawody i wydarzenia'
]

export default function Industries(){
    return (
        <div
            className="space-y-2"
        >
            <h2
                className="text-3xl-plus font-semibold"
            >Wybierz branżę</h2>
            <ul
                className="flex items-center justify-start gap-2 flex-wrap "
            >
                {
                    industries.map((industry) => {
                        return (
                            <Link
                                className="inline-flex border px-4 py-1 rounded-full items-center gap-3 hover:bg-brand-caramel/13 duration-300 ease-in-out transition-colors shrink-0"
                                href="/odkrywaj?&industry=stajnie"  
                                key={`industry-${industry}`}          
                            >
                                <HorseIcon
                                    className="size-4"
                                />
                                <span>
                                    {industry}
                                </span>
                            </Link>
                        )
                    })
                }

            </ul>
        </div>
    )
}