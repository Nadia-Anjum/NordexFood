using Examine;

namespace ContentDeliveriApi.Models
{
    public class SearchResponseModel
    {
        // Indicates whether there are any search results
        public bool HasResults => TotalResultCount > 0;

        // The search query string
        public string? Query { get; set; }

        // The total number of results found
        public long TotalResultCount { get; set; }

        // The collection of search results
        public IEnumerable<ISearchResult>? SearchResults { get; set; }

        // Default constructor
        public SearchResponseModel() { }

        // Constructor to initialize the SearchResponseModel with query, totalResultCount, and searchResults
        public SearchResponseModel(string? query, long totalResultCount, IEnumerable<ISearchResult>? searchResults)
        {
            Query = query;
            TotalResultCount = totalResultCount;
            SearchResults = searchResults;
        }
    }
}