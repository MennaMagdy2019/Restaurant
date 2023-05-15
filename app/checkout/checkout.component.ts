import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cart!:Cart;
  constructor(private _CartService : CartService){}

  clearCart(){
    // this._CartService.getCartObservable().subscribe((cart) => {
    //   this.cart = 0
    // })
    this._CartService.getCartObservable().subscribe((newCart) => {
       newCart.totalCount =0
    })

  }
}
