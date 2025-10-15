import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { WishesComponent } from './pages/wishes/wishes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'wishes', component: WishesComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'submit', component:SubmitComponent, },
  {path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
