import { Ad } from './Ad';

export class PagedAds {
    PagedSize: Number;
    CurrentPage: Number;
    TotalPages: Number;
    TotalCount: Number;
    Ads: Array<Ad> = [];
}