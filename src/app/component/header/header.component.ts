import { Auth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }


  isAuthenticated (){
    return this.AuthService.isLoggedIn;
  }

async logout(){
  await this.AuthService.logout();
}

}
