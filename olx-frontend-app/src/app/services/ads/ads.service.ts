import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagedAds } from 'src/app/models/PagedAds';
import { UrlSerializer } from '@angular/router';
import { AdsParameters } from 'src/app/models/AdsParameters';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private url: string = 'https://localhost:44377/api/Ad';
  constructor(private httpClient: HttpClient) { }

  getByCategory(categoryIdFilter: string) {
    return this.httpClient.get<PagedAds>(this.url, { params: { CategoryIdFilter: categoryIdFilter }})
  }
}
