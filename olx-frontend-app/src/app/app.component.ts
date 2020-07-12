import { Component } from '@angular/core';
import 'automapper-ts';
import { TokenStorageService } from './services/tokenStorage/token-storage.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'olx-frontend-app';
  isLoggedIn: boolean = false;
  userId: Number;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(!this.isLoggedIn)
      return;
      
    const user = this.tokenStorageService.getUser();
    this.userId = user.Id;

  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
}
