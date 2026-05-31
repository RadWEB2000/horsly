import { Brands, Categories, ControlPanel } from "@/views/products-view";
import { RegularProductCard  as Product} from "@/utils/cards";


export default function ProductsPage(){
    return (
        <>
            <div
                className="grid grid-cols-[350px_calc(100%-350px)] px-3 mb-4"
            >
                <div
                    className="bg-sky-200/0 p-4 space-y-6"
                >
                    <Categories/>
                    <Brands/>
                </div>
                <div
                    className="@container/right"
                >
                    <ControlPanel/>
                    <div
                        className="bg-teal-100/0 @container/products grid grid-cols-1 gap-3 p-7 @sm2/right:grid-cols-2 @md3/right:grid-cols-3 @lg3/right:grid-cols-4"
                    >
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </>
    )
}