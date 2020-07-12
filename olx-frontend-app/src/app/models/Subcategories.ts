import { Category } from './Category';
import { Observable } from 'rxjs';

export class Subcategories {
    mainCategoryName : string;
    list: Observable<Category[]>;
}