import { LinkProps } from "next/link";

export type T_RegularArticleCard = {
    title:string;
    excerpt:string;
    image:T_ImageBase;
    uri:string;
    author:{
        image:T_ImageBase;
        fullname:string;
    };
    release:string;
    category:string;
}

export type T_BuyButton = {
    label:'Zamów' | 'Kup' | 'Sprawdź'
} & LinkProps;