import { ChevronIcon, HomeIcon } from "@/assets/svgr";
import Link from "next/link";

type T_BreadcrumbItem = {
    label:string;
    href:string;
}

function Start({href,label}:T_BreadcrumbItem) {
    return (
        <Link href={href} className="inline-flex flex-wrap items-center  hocus:underline transition-colors duration-300 ease-in-out group gap-1.5">
            <HomeIcon
                className="size-2 fill-brand-coffee transition-colors duration-300 ease-in-out  lg:size-3.5"
            />
            <span
                className="relative after:content-['']  after:absolute  after:w-full  after:h-px  after:block  after:bg-brand-coffee  after:-bottom-0.5  after:left-0  after:origin-left group-hocus:after:scale-x-100 after:scale-x-0 after:duration-300 after:transition-transform  after:ease-in-out text-xs font-ui uppercase lg:text-sm"
            >
                {label}
            </span>
        </Link>
    )
}

function Item({href,label}:T_BreadcrumbItem){
    return (
        <Link href={href} className="inline-flex flex-wrap items-center hocus:underline transition-colors duration-300 ease-in-out group gap-1.5">
            <ChevronIcon
                className="size-2 fill-brand-coffee group-hocus:fill-neutral-200 transition-colors duration-300 ease-in-out  lg:size-3.5"
            />
            <span
                className="relative after:content-['']  after:absolute  after:w-full  after:h-px  after:block  after:bg-brand-coffee  after:-bottom-0.5  after:left-0  after:origin-left group-hocus:after:scale-x-100 after:scale-x-0 after:duration-300 after:transition-transform  after:ease-in-out text-xs font-ui uppercase  lg:text-sm"
            >
                {label}
            </span>
        </Link>
    )
}


export default function Breadcrumbs({breadcrumbs}: {breadcrumbs:Array<T_BreadcrumbItem>}){
    return (
        <menu
            className="flex items-center justify-start gap-2 flex-wrap mb-4 col-span-full row-start-1"
        >
            <Start
                href="/"
                label="Start"
            />
            {
                breadcrumbs.map(({...item}) => {
                    return (
                        <Item
                            key={`breadcrumb-${item.label}`}
                            {...item}
                        />
                    )
                })
            }
        </menu>
    )
}