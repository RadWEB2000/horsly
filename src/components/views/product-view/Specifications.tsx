import type { T_Specifications } from "@/ts/product-view";

export default function Specifications({table,title}:T_Specifications){
    return (
        <div
            className="mb-15"
        >
            <h2
                className="text-4xl-plus font-bold text-brand-espresso"
            >{title}</h2>
            {
                table &&
                <div
                    className="overflow-x-auto rounded-2xl mt-10"
                >
                    <table
                        className="table-fixed bg-rose-200/0 border-collapse w-full text-center"
                    >
                        <thead
                            className=" bg-brand-bone/45"
                        >
                            <tr
                                className=" *:py-4.5"
                            >
                                <th
                                    className=""
                                    scope="col"
                                >{table.parameters}</th>
                                <th
                                    scope="col"
                                >{table.values}</th>
                            </tr>
                        </thead>
                        <tbody
                            className="*:even:bg-brand-bone/25 odd:bg-brand-bone/5"
                        >
                            {
                                table.rows && table.rows.map(({parameter,value}) => {
                                    return (
                                        <tr
                                            className="*:py-3"
                                            key={`table-specification-${parameter}-${value}`}
                                        >
                                            <th className="font-medium" scope="row">{parameter}</th>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}