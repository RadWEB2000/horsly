import { ProductsRow } from "@/utils/ui";

export default function ProductsPage(){
    return (
        <>
            <h1>Product Page</h1>
            <div
                className="grid grid-cols-[350px_calc(100%-350px)]"
            >
                <div
                    className="bg-sky-200"
                >
                    sidebar
                </div>
                <div
                    className="bg-teal-100/0"
                >
                    <ProductsRow/>
                    <ProductsRow/>
                    <ProductsRow/>
                    <ProductsRow/>
                </div>
            </div>
        </>
    )
}