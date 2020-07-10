import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = 'https://localhost:44377/api/Category/';

  constructor(private httpClient: HttpClient) { }
  getAllCategories(): Observable<Category[]> {

    return this.httpClient.get<Category[]>(this.url);
  }

  getSubcategories(id: number) {
    return this.httpClient.get<Category[]>(`${this.url}${id}`);
  }
}
