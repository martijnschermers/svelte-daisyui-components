import type { Size } from "../enums/size.enum";

export interface TabType {
    text: string;
    href: string;
    size: Size;
    active: boolean;
}
