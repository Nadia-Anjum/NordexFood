import type { BaseComponent } from "./baseComponent";
import type { BaseLink } from "./baseLink";
export interface imageAndText extends BaseComponent{
    title: string;
    text: string;
    image: string;
    link: BaseLink[];
    buttonColor: string;
    pdfS: BaseLink[];
    showBreadcrumbs: Boolean;
}