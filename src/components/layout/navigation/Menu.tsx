import { menu } from "@/static/nav-menu";
import Link from "next/link";


export default function Menu(){
    return (
        <menu
            className="flex items-center jusitfy-end gap-3"
        >
            {
                menu.map(({href,label}) => {
                        return (
                            <Link
                                className="uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand-espresso after:scale-x-0  after:duration-200 after:transition-all after:ease-linear hover:after:scale-x-100  after:origin-left font-bold"
                                href={href}
                                key={`menu-item-${label}`}
                            >
                                {label}
                            </Link>
                        )
                })
            }
        </menu>
    )
}