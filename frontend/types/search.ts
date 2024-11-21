export interface SearchResult {
    id: string;
    score: number;
    values: {
        createDate: string;
        updateDate: string;
        nodeName: string;
        urlName: string;
        path: string;
    };
}

export interface SearchResults {
    hasResults: boolean;
    query: string;
    totalResultCount: number;
    searchResults: SearchResult[];
}