import { Category } from './Category';
import { Observable } from 'rxjs';

export class Categories {
    SelectedCategoryId : Number = null;
    AllCategories: Observable<Category[]>;
}