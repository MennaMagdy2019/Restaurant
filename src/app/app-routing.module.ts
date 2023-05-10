import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/pages/about/about.component';
import { CartComponent } from './Components/pages/cart/cart.component';
import { ContactComponent } from './Components/pages/contact/contact.component';
import { ErrorComponent } from './Components/pages/error/error.component';
import { FoodPageComponent } from './Components/pages/food-page/food-page.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { LogoutComponent } from './Components/pages/logout/logout.component';
import { MenuComponent } from './Components/pages/menu/menu.component';
import { RegisterComponent } from './Components/pages/register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"search/:searchTerm" , component:HomeComponent},
  {path: "tag/:tag" , component:HomeComponent},
  {path:"food/:id" , component:FoodPageComponent},
  {path:"cart-page",component:CartComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
