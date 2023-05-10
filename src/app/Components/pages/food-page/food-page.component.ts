import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/Food';
import { CartService } from 'src/app/Services/cart.service';
import { MenuServiceService } from 'src/app/Services/menu-service.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!:Food;

  constructor(private _foodService:MenuServiceService ,private activatedRoute:ActivatedRoute,private _CartService:CartService , private router:Router){}

  ngOnInit(){
  this.activatedRoute.params.subscribe((param) => {
    if(param.id)
       this.food = this._foodService.getFoodById(param.id)
  })
  }


  addToCart(){
    this._CartService.addToCart(this.food)
    this.router.navigateByUrl("cart-page")
  }
}
