export interface Accordion {
    items: items;
    title: string;
}
export interface AccordionItem {
    title: string;
    text: any;
}

interface items {
    items: content[];
}

interface content {
    content: properties;
}

interface properties {
    properties: AccordionItem;
}