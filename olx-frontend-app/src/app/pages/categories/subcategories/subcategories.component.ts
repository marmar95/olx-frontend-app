import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Subcategories } from 'src/app/models/Subcategories';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit, OnChanges {

  constructor(public service: CategoryService) { }
  @Input()
  mainCategoryId: number = null;

  model: Subcategories = new Subcategories();

  ngOnInit(): void {
    
    this.reloadData();
  }

  ngOnChanges() {
    this.reloadData();
  }

  private reloadData() {
    this.model.List = this.service.getSubcategories(this.mainCategoryId);
  }

}
