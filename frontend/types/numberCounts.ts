import type { Link } from "./link";

export interface numberCounts {
    blocks: numberCount[];
}
export interface numberCount {
    title: string;
    number: number;
    text: string;
    link: Link;
    numbers: numberCount[];
}