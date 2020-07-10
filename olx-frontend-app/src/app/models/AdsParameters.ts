export class AdsParameters {
    
    public PageNumber: Number = 1;
    public PageSize: Number = 5;
    public FavouriteUserId: Number = null;
    public UserIdFilter: Number = null;
    public CategoryIdFilter: Number = null;
    public PriceFromFilter: Number = null;
    public PriceToFilter: Number = null;
    public IsPriceNegotiable: boolean = null;
    public CreationDateFrom: Date = null;
    public CreationDateTo: Date = null;
    public TagFilters: Array<Number>;
    public KeyWords: string;
    public SortBy: string = "CreationDate";
    public IsDescendingSorting: boolean = true;
}