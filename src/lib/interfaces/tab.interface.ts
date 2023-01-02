import type { Size } from "../enums/size.enum";

export interface Tab {
    text: string;
    href: string;
    size: Size;
    active: boolean;
}
