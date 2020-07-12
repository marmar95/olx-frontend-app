import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input()
  isLoggedIn: boolean = false;

  @Output() logoutEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  }

  logout() {
    this.logoutEvent.emit(null);
  }

}
