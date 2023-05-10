import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogged:boolean = false;
  cartQuantity = 0;
  constructor(private _cartService:CartService , private authService : UserAuthService ){

  //  console.log(this.isUserLogged)
  }
  ngOnInit(): void {
   this._cartService.getCartObservable().subscribe((newCart) => {
     this.cartQuantity = newCart.totalCount
   })
//////authentication User 
   this.authService.getLoggedStatus().subscribe(status =>{
    this.isUserLogged = status
    console.log(this.isUserLogged)
   })

    this.isUserLogged = this.authService.isUserLogged
  }


  login(){
    this.authService.login('UserName' , 'Password');
    this.isUserLogged = this.authService.isUserLogged
  }
  logout(){
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged
  }
}


