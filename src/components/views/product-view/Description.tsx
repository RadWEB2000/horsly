import type { T_Description } from "@/ts/product-view";

export default function Description({article,title}:T_Description){
    return (
        <div
            className="mb-15"
        >
            <h2
                className="text-4xl-plus font-bold text-brand-espresso"
            >{title}</h2>
            <article
                className="prose max-w-[172ch]"
                dangerouslySetInnerHTML={{__html:article}}
            />
        </div>
    )
}