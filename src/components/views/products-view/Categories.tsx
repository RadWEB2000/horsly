import categories from "@/static/products-categories.json"
import type { T_Category } from "@/ts/products-view"
import {CategoryList} from "@/views/products-view"



export default function Categories(){
    return (
        <div
            className="space-y-2"
        >
            <h2
                className="text-2xl-plus font-semibold"
            >Kategorie</h2>
            <CategoryList
                categories={categories as Array<T_Category>}
            />
        </div>
    )
}