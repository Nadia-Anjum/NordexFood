export interface BaseLink {
    url: string | null;
    name: string;
    target: string | null;
    queryString: string | null;
    title: string;
    text: string;
    destinationId: string;
    destinationType: string;
    route: {
        path: string;
        startItem: {
            id: string;
            path: string;
        };
    };
    linkType: string;

}