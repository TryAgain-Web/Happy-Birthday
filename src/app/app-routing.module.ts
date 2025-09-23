import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { WishesComponent } from './pages/wishes/wishes.component';

const routes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'wishes', component: WishesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
