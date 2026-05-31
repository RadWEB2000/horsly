import { RadarIcon } from "@/assets/svgr"
import locations from "@/static/locations.json"

export default function Location(){

    const distance = [
        '+5km',
        '+10km',
        '+25km',
        '+50km',
        '+100km',
        '+200km',
        '+500km',
    ]

    return (
        <div
            className="space-y-2"
        >
            <h2
                className="text-2xl-plus font-semibold"
            >Wybierz lokalizację</h2>
            <div>
                <h3
                    className="text-xl mb-2 font-semibold"
                >Ręczny wybór</h3>
                <div>
                    <select className="border rounded" name="vivodeship" id="vivodeship">
                        <option value="">Województwa</option>
                        {
                            locations.map(({vivodeship:{label,value}}) => {
                                return (
                                    <option key={label} value={value}>{label}</option>
                                )
                            })
                        }
                    </select>
                    <select name="districts" id="districts">
                        <option value="">Powiaty</option>
                        {
                            locations[0].vivodeship.districts.map(({label,value}) => {
                                return (
                                    <option key={label} value={value}>{label}</option>
                                )
                            })
                        }
                    </select>
                    <select name="commune" id="commune" disabled>
                        <option value="">Gminy</option>
                        {
                            locations[0].vivodeship.districts[0].commune.map(({label,value}) => {
                                return (
                                    <option key={label} value={value}>{label}</option>
                                )
                            })
                        }
                    </select>
                    <select name="distance" id="distance">
                        {
                            distance.map((item) => {
                                return (
                                    <option key={item} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div
                className="mt-3"
            >
                <h3 className="text-xl-plus mb-2 font-semibold">Automatyczny wybór</h3>
                <button className="bg-brand-coffee text-brand-parchment rounded-xl inline-flex gap-3 py-2 px-5 items-center" type="button">
                    <RadarIcon className="size-4 fill-brand-parchment" />
                    <span>Lokalizuj</span>
                </button>
            </div>
        </div>
    )
}