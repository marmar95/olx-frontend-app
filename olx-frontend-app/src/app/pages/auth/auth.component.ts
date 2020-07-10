import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public selectedTabIndex : Number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(index) {
    this.selectedTabIndex = index;
  }

}
