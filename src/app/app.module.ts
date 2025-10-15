import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { WishesComponent } from './pages/wishes/wishes.component';
import { AuthModule } from './auth/auth.module';
import { SubmitComponent } from './pages/submit/submit.component';

// 🔥 Add these imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    WishesComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,

    // 🔥 Initialize Firebase here
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
