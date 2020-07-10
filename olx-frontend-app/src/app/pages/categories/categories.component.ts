import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Categories } from 'src/app/models/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  model: Categories = new Categories();
  
  constructor(public service: CategoryService) { }

  ngOnInit() {
    this.model.AllCategories = this.service.getAllCategories();
  }

  setSelectedCategory(id: Number) {
    
    this.model.SelectedCategoryId = id;
  }

}
