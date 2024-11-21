export interface HeroSlider {
    items: {
        gridColumns: number;
        items: Array<{
            rowSpan: number;
            columnSpan: number;
            areaGridColumns: number;
            areas: any[];
            content: {
                contentType: string;
                id: string;
                properties: {
                    image: Array<{
                        focalPoint: any;
                        crops: any[];
                        id: string;
                        name: string;
                        mediaType: string;
                        url: string;
                        extension: string;
                        width: number;
                        height: number;
                        bytes: number;
                        properties: any;
                    }>;
                    headline: string;
                    text: any;
                };
            };
            settings: any;
        }>;
    };
}