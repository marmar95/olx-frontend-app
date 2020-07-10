import { Category } from './Category';
import { Observable } from 'rxjs';

export class Subcategories {
    MainCategoryName : string;
    List: Observable<Category[]>;
}