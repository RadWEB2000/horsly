import type { SVGAttributes } from "react";

export {};
declare global {
    type T_SVG = SVGAttributes<SVGElement>;

    type T_Layout_Props = Readonly<{
        children: React.ReactNode;
    }>;

    type T_ImageBase = {
        blurDataURL?: string;
        alt:string;
        src:string;
        sizes?:string;
        height?:number;
        width?:number;
        title:string;
    }
    type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

    type Url = `http://${string}` | `https://${string}`;

    type T_SocialTypes = "facebook"|"instagram"|"github"|"linkedin"|"medium"|"youtube";
}