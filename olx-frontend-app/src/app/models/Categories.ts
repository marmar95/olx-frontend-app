import { Category } from './Category';
import { Observable } from 'rxjs';

export class Categories {
    SelectedCategoryId : Number = null;
    List: Observable<Category[]>;
}