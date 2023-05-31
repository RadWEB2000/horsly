import { RegularProductCard  as Product} from "@/utils/cards";

export default function ProductsRow(){
    return (
        <div
            className="p-7 even:bg-brand-porcelain "
        >
            <h2
                className="text-3xl-plus font-bold"
            >Tytuł</h2>
            <p
                className="text-sm text-balance mb-5"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores omnis error veniam vitae! Odit molestiae itaque commodi repellendus laboriosam. Delectus recusandae, consectetur deleniti ullam nobis at suscipit fugiat ex.
            </p>
            <ul className="grid grid-cols-4 gap-[5px] @container/products">
                <Product/>
                <Product/>
                <Product/>
                {/* <Product/> */}
                <Product/>
            </ul>
        </div>
    )
}