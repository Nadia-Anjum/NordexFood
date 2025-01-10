using ContentDeliveriApi.Models;

namespace ContentDeliveriApi.Services
{
    public interface ISearchService
    {
        public SearchResponseModel Search(SearchRequestModel searchRequest);
    }
}