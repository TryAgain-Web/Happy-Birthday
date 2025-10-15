import { Route, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { LoginForm } from '../types/auth';
import { RegisterForm } from '../types/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';import { observable, Observable } from 'rxjs';
4
const app = initializeApp(environment.firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn: boolean = false;
  loading: boolean = false;

  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) =>{
      this.isLoggedIn = !!user;
    })
  }

  isAuthenticated(): Observable<boolean>{
    return new Observable<boolean>((observer) => {
      onAuthStateChanged(auth, (user) => {
        observer.next(!!user);
      })
    })
  }



  async login(form: LoginForm){

    this.loading = false;

    const auth = getAuth()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      console.log('User logged in:', userCredential.user);
      this.isLoggedIn = true;

      this.router.navigate(['home'])

    } catch (error: any) {
      console.error('Login error:', error);
      alert('Wrong Email or Password');
      this.isLoggedIn = false;
    } finally {
      this.loading = false;
    }
  }

  async register(form: RegisterForm){
    if (this.loading) return

    this.loading = true

    const Auth = getAuth()

    try{
      const userCredential = await createUserWithEmailAndPassword(Auth, form.email, form.password);
      console.log('User registered:', userCredential.user);
        this.isLoggedIn = true;

       this.router.navigate(['home'])

      }catch (error: any) {
    console.error('Registration error:', error);
    alert('Something went wrong.');
    this.isLoggedIn = false;
  } finally {
    this.loading = false;

    }
  }

 async logout() {
    try {
      console.log("Hello world");
     await signOut(auth);
     this.isLoggedIn == (false);
   } catch (error) {
     console.error('Error during sign out:', error);
   }
  }
}






