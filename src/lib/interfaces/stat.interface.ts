import type { Button } from "./button.interface";
import type { Image } from "./image.interface";

export interface Stat {
    title: string,
    value: string,
    description?: string,
    image?: Image,
    actions?: Button[],
}
