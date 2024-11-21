import type { Link } from "./link";

export interface uspElements {
    blocks: uspElement[];
}
export interface uspElement {
    title: string;
    text: string;
    icon: string;
    image: string;
    link: Link;
    elements: uspElement[];
}