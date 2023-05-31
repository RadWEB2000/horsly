export type T_NavMenu = {
    menu:Array<{
        label:string;
        href:string;
        submenu?:Array<{
            label:string;
            href:string;            
        }>
    }>
}