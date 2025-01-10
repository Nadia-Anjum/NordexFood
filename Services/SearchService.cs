using Examine;
using Examine.Search;

using ContentDeliveriApi.Models;

using Lucene.Net.Analysis.Core;

using StackExchange.Profiling.Internal;
using Umbraco.Cms.Infrastructure.Examine;
using UmbracoConstants = Umbraco.Cms.Core.Constants;
using ContentDeliveriApi.Settings;

namespace ContentDeliveriApi.Services;

public class SearchService : ISearchService
{
    private readonly IExamineManager _examineManager;
    private readonly string[] _docTypesToExclude =
    [SiteSettings.SettingsNodeAlias];


    public SearchService(IExamineManager examineManager)
    {
        _examineManager = examineManager ?? throw new ArgumentNullException(nameof(examineManager));

    }

    public SearchResponseModel Search(SearchRequestModel searchRequest)
    {
        if (searchRequest == null || !_examineManager.TryGetIndex(UmbracoConstants.UmbracoIndexes.ExternalIndexName, out IIndex? index))
        {
            return new SearchResponseModel();
        }

        IBooleanOperation? query = index.Searcher.CreateQuery(IndexTypes.Content)
            .GroupedNot(new[] { "umbracoNaviHide" }, new[] { "1" })
            .And().GroupedNot(new[] { "__NodeTypeAlias" }, _docTypesToExclude);

        if (!string.IsNullOrWhiteSpace(searchRequest.Query))
        {
            string searchQuery = searchRequest.Query.ToLower();

            if (searchQuery.Length == 1)
            {
                // If the search query is a single letter, use a wildcard to match all results starting with that letter
                string firstLetterWildcard = searchQuery + "*";
                query = query.And().Field("nodeName", firstLetterWildcard.MultipleCharacterWildcard());
            }
            else if (searchQuery.Length > 1 && searchQuery.Length < 4)
            {
                // If the search query is a part of a word (less than 4 characters), use a wildcard to match all results containing that part
                string partialQueryWildcard = searchQuery + "*";
                query = query.And().Field("nodeName", partialQueryWildcard.MultipleCharacterWildcard());
            }
            else
            {
                // If the search query is more than 3 characters, match the exact term
                query = query.And().Field("nodeName", searchQuery);
            }
        }

        ISearchResults? pageOfResults = query.Execute(new QueryOptions(searchRequest.Skip, searchRequest.PageSize));

        return new SearchResponseModel(searchRequest.Query, pageOfResults.TotalItemCount, pageOfResults);
    }
}

