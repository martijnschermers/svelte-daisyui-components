import type { Size } from "../enums/size.enum";

export interface Button {
    title?: string;
    svgPath?: string;
    active?: boolean;
    color?: string;
    disabled?: boolean;
    size?: Size;
}
