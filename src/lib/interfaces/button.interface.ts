import type { Color, ColorStrings } from "$lib/enums/color.enum";
import type { Size } from "../enums/size.enum";

export interface ButtonType {
    text?: string;
    svgPath?: string;
    active?: boolean;
    disabled?: boolean;
    color?: Color | ColorStrings;
    size?: Size;
}
