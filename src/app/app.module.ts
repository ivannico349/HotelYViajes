import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from './carousel/carousel.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CarouselComponent,
    NotFoundComponent,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    RoomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
