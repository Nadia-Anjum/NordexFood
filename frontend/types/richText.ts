import type { BaseComponent } from "./baseComponent";
import type { BaseLink } from "./baseLink";

export interface richText extends BaseComponent {
    title: string;
    text: string;
    link: BaseLink[];
    numberCounts: numberCounts;
}

export interface numberCount {
    title: string;
    number: number;
    text: string;
    link: BaseLink[];
    numbers: numberCount[];
}

export interface numberCounts {
    blocks: numberCount[];
}