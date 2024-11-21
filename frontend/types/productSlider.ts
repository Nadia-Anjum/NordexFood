import { BaseLink } from "./baseLink";

export interface productSliderContainer {
    blocks: productSlider[];
    title: string;
}
export interface productSlider {
    title: string;
    image: string;
    text: string;
    link: BaseLink[];
    products: productSlider[];
}