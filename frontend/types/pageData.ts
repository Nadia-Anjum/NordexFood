
export interface pageData {
    name: string;
    createDate: string; // ISO 8601 date string
    updateDate: string; // ISO 8601 date string
    route: Route;
    id: string; // UUID
    contentType: string;
    properties: Properties;
    breadcrumbs: any[];
    
}
interface Redirect{
    route: Route;
}
interface Route {
    path: string;
    startItem: StartItem;
}
  
interface StartItem {
    id: string; // UUID
    path: string;
}
  
interface Component {
    contentType: any; // Add more content types as needed
    properties: any;
    items: any[];
}
  
interface Properties {
    title: string;
    description: string;
    redirect: Redirect[];
    components: Component;
}
