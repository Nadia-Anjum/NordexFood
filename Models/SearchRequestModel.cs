using Microsoft.AspNetCore.Mvc.Rendering;

namespace ContentDeliveriApi.Models
{
    public class SearchRequestModel
    {
        // The search query string
        public string? Query { get; set; }

        // The current page number
        public int Page { get; set; }

        // The number of items per page
        public int PageSize { get; set; }

        // The number of items to skip based on the current page and page size
        public int Skip => Page > 1 ? (Page - 1) * PageSize : 0;

        // Constructor to initialize the SearchRequestModel with query, page, and pageSize
        public SearchRequestModel(string? query, string? page, int pageSize)
        {
            Query = query;

            // Try to parse the page string to an integer and set the Page property
            if (int.TryParse(page, out int pageNumber) && pageNumber > 0)
            {
                Page = pageNumber;
            }

            // Set the PageSize property
            PageSize = pageSize;
        }
    }
}
