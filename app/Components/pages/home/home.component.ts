import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/Food';
import { CartService } from 'src/app/Services/cart.service';
import { MenuServiceService } from 'src/app/Services/menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  foods:Food[]=[]
  constructor(private _foodService:MenuServiceService,private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.foods=this._foodService.getAllBySearch(params.searchTerm)
      else if (params.tag)
        this.foods = this._foodService.getAllFoodsByTag(params.tag)
      else
        this.foods = this._foodService.getAll()

    })

   console.log(this.foods)
  }

}
