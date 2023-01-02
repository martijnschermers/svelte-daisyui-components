import type { ButtonType } from "./button.interface";
import type { ImageType } from "./image.interface";

export interface StatType {
    title: string,
    value: string,
    description?: string,
    image?: ImageType,
    actions?: ButtonType[],
}
