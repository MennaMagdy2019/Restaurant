import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './Components/partials/header/header.component';
import { FooterComponent } from './Components/partials/footer/footer.component';
import { NavbarComponent } from './Components/partials/navbar/navbar.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { MenuComponent } from './Components/pages/menu/menu.component';
import { ContactComponent } from './Components/pages/contact/contact.component';
import { AboutComponent } from './Components/pages/about/about.component';
import { MenudetailsComponent } from './Components/pages/menudetails/menudetails.component';
import { ErrorComponent } from './Components/pages/error/error.component';
import { CartComponent } from './Components/pages/cart/cart.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { LogoutComponent } from './Components/pages/logout/logout.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './Components/partials/search/search.component';
import { TagsComponent } from './Components/partials/tags/tags.component';
import { FoodPageComponent } from './Components/pages/food-page/food-page.component';
import { TitleComponent } from './Components/partials/title/title.component';
import { NotFoundComponent } from './Components/partials/not-found/not-found.component';
import { RegisterComponent } from './Components/pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    MenudetailsComponent,
    ErrorComponent,
    CartComponent,
    LoginComponent,
    LogoutComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    TitleComponent,
    NotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatSlideToggleModule,
     HttpClientModule,
     RatingModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
