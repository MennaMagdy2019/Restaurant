import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { MenuServiceService } from 'src/app/Services/menu-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags?:Tag[];
  constructor(private _foodService:MenuServiceService){}

  ngOnInit(){
   this.tags=this._foodService.getAllTags()
  }

}
