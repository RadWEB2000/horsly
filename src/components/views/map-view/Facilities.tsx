const facilities:Array<{title:string;items:Array<{title:string;id:string;}>}> = [
  {
    title: 'Podstawowe',
    items: [
      { id: 'wifi', title: 'Wi-Fi' },
      { id: 'workspace', title: 'Miejsce do pracy' },
      { id: 'tv', title: 'Telewizor' },
      { id: 'air_conditioning', title: 'Klimatyzacja' },
      { id: 'heating', title: 'Ogrzewanie' },
      { id: 'washing_machine', title: 'Pralka' },
      { id: 'dryer', title: 'Suszarka' },
      { id: 'iron', title: 'Żelazko' },
    ],
  },

  {
    title: 'Kuchnia i jadalnia',
    items: [
      { id: 'kitchen', title: 'Kuchnia' },
      { id: 'fridge', title: 'Lodówka' },
      { id: 'microwave', title: 'Mikrofalówka' },
      { id: 'dishwasher', title: 'Zmywarka' },
      { id: 'coffee_machine', title: 'Ekspres do kawy' },
      { id: 'kettle', title: 'Czajnik' },
      { id: 'oven', title: 'Piekarnik' },
      { id: 'bbq', title: 'Grill' },
    ],
  },

  {
    title: 'Sypialnia',
    items: [
      { id: 'bed_linen', title: 'Pościel' },
      { id: 'extra_pillows', title: 'Dodatkowe poduszki i koce' },
      { id: 'blackout_blinds', title: 'Rolety zaciemniające' },
      { id: 'wardrobe', title: 'Szafa lub garderoba' },
    ],
  },

  {
    title: 'Łazienka',
    items: [
      { id: 'hair_dryer', title: 'Suszarka do włosów' },
      { id: 'shampoo', title: 'Szampon' },
      { id: 'shower_gel', title: 'Żel pod prysznic' },
      { id: 'towels', title: 'Ręczniki' },
      { id: 'bathtub', title: 'Wanna' },
      { id: 'shower', title: 'Prysznic' },
    ],
  },

  {
    title: 'Na zewnątrz',
    items: [
      { id: 'garden', title: 'Ogród' },
      { id: 'terrace', title: 'Taras' },
      { id: 'balcony', title: 'Balkon' },
      { id: 'fireplace_outdoor', title: 'Palenisko' },
      { id: 'outdoor_furniture', title: 'Meble ogrodowe' },
    ],
  },

  {
    title: 'Rekreacja',
    items: [
      { id: 'pool', title: 'Basen' },
      { id: 'hot_tub', title: 'Jacuzzi' },
      { id: 'sauna', title: 'Sauna' },
      { id: 'gym', title: 'Siłownia' },
      { id: 'bicycles', title: 'Rowery' },
    ],
  },

  {
    title: 'Parking i transport',
    items: [
      { id: 'free_parking', title: 'Bezpłatny parking' },
      { id: 'paid_parking', title: 'Płatny parking' },
      { id: 'garage', title: 'Garaż' },
      { id: 'ev_charger', title: 'Ładowarka samochodów elektrycznych' },
    ],
  },

  {
    title: 'Bezpieczeństwo',
    items: [
      { id: 'smoke_alarm', title: 'Czujnik dymu' },
      { id: 'carbon_monoxide_alarm', title: 'Czujnik czadu' },
      { id: 'fire_extinguisher', title: 'Gaśnica' },
      { id: 'first_aid_kit', title: 'Apteczka' },
      { id: 'security_cameras', title: 'Kamery bezpieczeństwa' },
    ],
  },

  {
    title: 'Dostępność',
    items: [
      { id: 'step_free_access', title: 'Bezprogowe wejście' },
      { id: 'accessible_parking', title: 'Miejsce parkingowe dla osób z niepełnosprawnościami' },
      { id: 'wide_entry', title: 'Wejście powyżej 80 cm szerokości' },

      { id: 'bedroom_step_free_access', title: 'Bezprogowe wejście do sypialni' },
      { id: 'bedroom_wide_entry', title: 'Wejście do sypialni powyżej 80 cm szerokości' },

      { id: 'bathroom_step_free_access', title: 'Bezprogowe wejście do łazienki' },
      { id: 'bathroom_wide_entry', title: 'Wejście do łazienki powyżej 80 cm szerokości' },
      { id: 'toilet_grab_bar', title: 'Uchwyt przy toalecie' },
      { id: 'shower_grab_bar', title: 'Uchwyt pod prysznicem' },
      { id: 'roll_in_shower', title: 'Prysznic bezprogowy' },
      { id: 'shower_chair', title: 'Krzesło pod prysznicem' },
    ],
  },

  {
    title: 'Zasady pobytu',
    items: [
      { id: 'pets_allowed', title: 'Zwierzęta dozwolone' },
      { id: 'children_allowed', title: 'Dzieci mile widziane' },
      { id: 'events_allowed', title: 'Możliwość organizacji wydarzeń' },
      { id: 'smoking_allowed', title: 'Palenie dozwolone' },
      { id: 'self_checkin', title: 'Samodzielne zameldowanie' },
    ],
  },
  {
  title: 'Udogodnienia dla jeźdźców',
  items: [
    { id: 'horse_stables', title: 'Stajnia dla koni' },
    { id: 'horse_boxes', title: 'Boksy dla koni' },
    { id: 'horse_paddocks', title: 'Padoki' },
    { id: 'riding_arena', title: 'Ujeżdżalnia' },
    { id: 'indoor_arena', title: 'Hala jeździecka' },
    { id: 'horse_trails', title: 'Szlaki konne' },
    { id: 'horse_trainer', title: 'Instruktor jazdy konnej' },
    { id: 'horse_rental', title: 'Możliwość wypożyczenia konia' },
    { id: 'horse_transport', title: 'Parking dla przyczep końskich' },
  ],
}
]

export default function Facilities(){
    return (
        <div
            className="space-y-2"
        >
            <h2
                className="text-2xl-plus font-semibold"
            >Udogodnienia</h2>       
            <div>
                {
                    facilities.map(({items,title}) => {
                        return (
                            <div key={title}>
                                <h3
                                    className="text-xl-plus"
                                >{title}</h3>
                                <div
                                    className="flex flex-col gap-1.5 my-4"
                                >
                                    {
                                        items.map(({id,title}) => {
                                            return (
                                                <label className="inline-flex items-center ml-3" key={title} htmlFor={id}>
                                                    <input className="size-4.5 accent-brand-olive"  type="checkbox" name={id} id={id} />
                                                    <span
                                                        className="text-lg ml-4"
                                                    >
                                                        {title}
                                                    </span>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}