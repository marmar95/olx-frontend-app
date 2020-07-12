import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagedAds } from 'src/app/models/PagedAds';

const URL: string = 'https://localhost:44377/api/ad';

@Injectable({
  providedIn: 'root'
})

export class AdsService {

  constructor(private httpClient: HttpClient) { }

  getByCategory(categoryIdFilter: string) {
    return this.httpClient.get<PagedAds>(URL, { params: { CategoryIdFilter: categoryIdFilter }})
  }
}
