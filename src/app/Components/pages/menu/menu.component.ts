import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuServiceService } from 'src/app/Services/menu-service.service';
import { Food } from 'src/app/models/Food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
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
