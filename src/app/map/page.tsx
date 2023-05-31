import { RegularCompanyCard as Company } from "@/utils/cards";
import { ControlPanel, Map } from "@/views/map-view";

export default function MapPage(){
    return (
        <div
            className="sm4:grid grid-cols-[5fr_4fr]  min-h-screen"
        >
            <div
                className="@container/sidebar p-7 space-y-5"
            >
                <div
                    className="inline-flex items-center justify-start gap-3"
                >
                    <ControlPanel/>
                    <h2
                        className="text-2xl-plus font-bold"
                    >Wyniki dla: Mińska Mazowieckiego</h2>
                </div>
                <div
                    className="@container/records grid grid-cols-3 gap-3"
                >
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                    <Company/>
                </div>
            </div>
            <div
                className="bg-green-100/0  flex flex-col items-center justify-center h-screen sticky top-0"
            >
                <Map/>
            </div>
        </div>
    )
}