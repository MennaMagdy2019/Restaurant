import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!:Cart;
  constructor(private _CartService : CartService){}

  ngOnInit(): void {
    this._CartService.getCartObservable().subscribe((cart) => {
      this.cart = cart
    })
  }

  removeFromCart(cartItem:CartItem){
    this._CartService.removeFromCart(cartItem.food.id)
  }

  changeQunatity(cartItem:CartItem ,quantityInString:string){
    const quantity = parseInt(quantityInString)
    this._CartService.changeQuantity(cartItem.food.id,quantity)
  }
}
