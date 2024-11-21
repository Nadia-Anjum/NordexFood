

export interface Link {
    url:             null | string;
    queryString:     null;
    title:           string;
    target:          null | string;
    destinationId:   null | string;
    destinationType: null | string;
    route:           Route | null;
    linkType:        LinkType;
  }
  
  export enum LinkType {
    Content = "Content",
    External = "External",
  }
  
  export interface Route {
    path:      string;
    startItem: StartItem;
  }
  
  export interface StartItem {
    id:   string;
    path: string;
  }