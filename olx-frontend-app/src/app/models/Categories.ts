import { Category } from './Category';
import { Observable } from 'rxjs';

export class Categories {
    selectedCategoryId : Number = null;
    list: Observable<Category[]>;
}