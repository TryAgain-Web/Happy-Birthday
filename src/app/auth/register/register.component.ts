import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

interface RegsiterForm {
  email: string;
  password: string;

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = { email: '', password: '' };



  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

   async submit() {
    this.authService.register(this.form)
}
  loading(){
    return this.authService.loading
  }
}
