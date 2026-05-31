import { Brands, Categories, ControlPanel} from "@/views/products-view";
import { RegularProductCard  as Product} from "@/utils/cards";
import { SadEmojiIcon } from "@/assets/svgr";
import { Hero } from "@/utils/ui";


export default async function ProductsPage({params}: {params: Promise<{products?: Array<string>}>}){
    const { products = [] } = await params
    console.log('produkty',products)
    return (
        <>
            <Hero/>
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
                        {
                            !(products.length > 0) ? 
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
                            </div> :
                            <div
                                className="w-full h-142 flex flex-col items-center justify-center gap-3"
                            >
                                <SadEmojiIcon
                                    className="size-68 max-w-8/10 aspect-square"
                                />
                                <h2
                                    className="text-2xl font-body! text-center max-w-[45ch]"
                                >Nie znaleźliśmy ofert spełniających wybrane kryteria.
Spróbuj zmienić filtry lub przejrzyj inne kategorie.</h2>
                            </div>
                        }
                </div>
            </div>
        </>
    )
}