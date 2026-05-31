import {Brand, Menu} from "@/layout/navigation";
export default function Navigation(){
    return (
        <nav
            className="sticky top-0 bg-[color-mix(in_srgb,var(--color-brand-parchment)_97%,var(--color-brand-caramel))] z-999"
        >
            <div
                className="max-w-[1450px] mx-auto flex items-center justify-between px-10 py-3"
            >
                <Brand/>
                <Menu/>
            </div>
        </nav>
    )
}