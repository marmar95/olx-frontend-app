import { Component } from '@angular/core';
import { Category } from '../app/models/Category'
import 'automapper-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'olx-frontend-app';
}
