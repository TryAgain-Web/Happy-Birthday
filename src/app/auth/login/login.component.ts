import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


interface LoginForm {
  email: string;
  password: string;

}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = { email: '', password: '' };


  constructor(private authService: AuthService) {}

  async submit() {


    this.authService.login(this.form)

  }

  loading(){
    return this.authService.loading;
  }
}
