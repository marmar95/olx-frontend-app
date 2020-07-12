import { Component, OnInit } from '@angular/core';
import { AdForm } from 'src/app/models/AdForm';
import { Dropdown } from 'src/app/models/Dropdown';
import { Observable } from 'rxjs';
import { AdsService } from 'src/app/services/ads/ads.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss']
})
export class EditAdComponent implements OnInit {

  form : AdForm = new AdForm();
  categories: Observable<Category[]>;
  createdSuccesfully: boolean = false;
  failed: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private adsService: AdsService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
  }

  onSubmit() {
    this.adsService.add(this.form).subscribe(
      data => {
        this.createdSuccesfully = true;
    },
    error => {
      this.failed = true;
      this.errorMessage = error.error.message;
    });
  }

}
