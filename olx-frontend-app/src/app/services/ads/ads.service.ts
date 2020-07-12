import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PagedAds } from 'src/app/models/PagedAds';
import { AdForm } from 'src/app/models/AdForm';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../tokenStorage/token-storage.service';

const URL: string = 'https://localhost:44377/api/ad';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AdsService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

  getByCategory(categoryIdFilter: string) {

    return this.httpClient.get<PagedAds>(URL, { params: { CategoryIdFilter: categoryIdFilter }})
  }

  add(form: AdForm): Observable<any> {
    const user = this.tokenStorageService.getUser();
    return this.httpClient.post(`${URL}`, {
      name: form.name,
      description: form.description,
      isPhoneNumberVisible: form.isPhoneNumberVisible,
      isEmailVisible: form.isEmailVisible,
      userId: user.Id
    }, httpOptions)
  }
}
