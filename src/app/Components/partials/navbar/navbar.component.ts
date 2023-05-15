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

  isLoggedIn: boolean = false;
  cartQuantity = 0;
  constructor(private _cartService:CartService , private _authService : AuthService ,private authService : UserAuthService ){}
  //  console.log(this.isUserLogged)}

  logout(){
    this._authService.logout();
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

    //////////////////authenication
    this._authService.userData.subscribe(()=>{
      if(this._authService.userData.getValue()){
        this.isLoggedIn = true
      }
      else{
        this.isLoggedIn = false
      }
    })
  }

}


