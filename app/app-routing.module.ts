import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/pages/cart/cart.component';
import { ErrorComponent } from './Components/pages/error/error.component';
import { FoodPageComponent } from './Components/pages/food-page/food-page.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { LogoutComponent } from './Components/pages/logout/logout.component';
import { MenuComponent } from './Components/pages/menu/menu.component';
import { RegisterComponent } from './Components/pages/register/register.component';
import { MainLayoutComponent } from './Components/pages/main-layout/main-layout.component';
import { AuthGuard } from './Guards/auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingTableComponent } from './booking-table/booking-table.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'book', component: BookingTableComponent },
      { path: 'search/:searchTerm', component: HomeComponent },
      { path: 'tag/:tag', component: HomeComponent },
      { path: 'food/:id', component: FoodPageComponent },

    ],
  },
  { path: 'cart-page', canActivate: [AuthGuard], component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
