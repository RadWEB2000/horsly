export type T_AvaibleColors = {
    colors:Array<string>;
    title:string;
}
export type T_AvaibleSizes = {
    sizes:Array<string>;
    title:string;
}

export type T_Specifications = {
    title:string;
    table: {
        parameters:string;
        values:string;
        rows:Array<{
            parameter:string;
            value:string;
        }>
    }
}

export type T_Description = {
    title:string;
    article:string;
}