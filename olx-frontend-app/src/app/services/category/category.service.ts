import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';

const URL: string = 'https://localhost:44377/api/category/';
@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAllCategories(): Observable<Category[]> {

    return this.httpClient.get<Category[]>(URL);
  }

  getSubcategories(id: number) {
    
    return this.httpClient.get<Category[]>(`${URL}${id}`);
  }
}
