import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.model.list = this.service.getAllCategories();
  }

  setSelectedCategory(id: Number): void {

    this.model.selectedCategoryId = id;
  }

}
