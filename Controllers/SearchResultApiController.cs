using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.Common.Filters;
using ContentDeliveriApi.Models;
using ContentDeliveriApi.Services;
using Umbraco.Cms.Web.Common.Controllers;

namespace ContentDeliveriApi.Controllers
{
    [ApiController]
    [Route("umbraco/api/[controller]/[action]")]
    public class SearchResultApiController : UmbracoApiController
    {
        private readonly ISearchService _searchService;

        // Constructor to inject the ISearchService dependency
        public SearchResultApiController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        // GET: umbraco/api/SearchResultApiController/Search
        // This endpoint performs a search based on the provided query, page, and pageSize parameters
        [HttpGet]
        public SearchResponseModel Search(string? query, string? page, int pageSize)
        {
            // Create a SearchRequestModel from the query parameters
            var searchRequest = new SearchRequestModel(query, page, pageSize);
            
            // Perform the search using the injected search service
            var response = _searchService.Search(searchRequest);

            // Log the response to the console (for debugging purposes)
            Console.WriteLine(response);
            
            // Return the search response
            return response;
        }

        // GET: umbraco/api/SearchResultApiController/test
        // This endpoint returns a simple "Hello World" message
        [HttpGet]
        public OkObjectResult test()
        {
            return new OkObjectResult("Hello World");
        }

        // Uncomment the following method if you want to support POST requests for search
        /*
        [HttpPost]
        public SearchResponseModel Search(SearchRequestModel searchRequest)
        {
            var response = _searchService.Search(searchRequest);
            Console.WriteLine(response);
            return response;
        }
        */
    }
}