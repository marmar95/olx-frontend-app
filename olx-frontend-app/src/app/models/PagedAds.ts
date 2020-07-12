import { Ad } from './Ad';

export class PagedAds {
    pagedSize: Number;
    currentPage: Number;
    totalPages: Number;
    totalCount: Number;
    ads: Array<Ad> = [];
}