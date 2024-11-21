import type { Route, Link } from "./link";

export interface Settings {
  total: number;
  items: Setting[];
}

export interface Setting {
  contentType: string;
  name:        string;
  createDate:  Date;
  updateDate:  Date;
  route:       Route;
  id:          string;
  properties:  ItemProperties;
  cultures:    Cultures;
}

export interface Cultures {
}

export interface ItemProperties {
  logo:         Logo[];
  menuLinks:    Link[];
  footerBlocks: FooterBlocks;
  searchResultPage: Link[];
}

export interface FooterBlocks {
  gridColumns: number;
  items:       FooterBlocksItem[];
}

export interface FooterBlocksItem {
  rowSpan:         number;
  columnSpan:      number;
  areaGridColumns: number;
  areas:           any[];
  content:         Content;
  settings:        null;
}

export interface Content {
  contentType: string;
  id:          string;
  properties:  ContentProperties;
}

export interface ContentProperties {
  headline: string;
  links:    Link[];
}


export interface Logo {
  focalPoint: null;
  crops:      any[];
  id:         string;
  name:       string;
  mediaType:  string;
  url:        string;
  extension:  string;
  width:      number;
  height:     number;
  bytes:      number;
  properties: Cultures;
}