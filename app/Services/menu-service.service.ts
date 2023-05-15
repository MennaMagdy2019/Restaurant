import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/Food';
// import {environment} from "src/environments/environment"
import { sample_foods, sample_Tags } from 'src/menuData';
import { Tag } from '../models/Tag';

// const Base_url = environment.production? '':'http://localhost:5000'
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http:HttpClient) { }

  private readonly Food_URL="http://localhost:3000/foods";
  private readonly Food_Tags_URL=this.Food_URL+'/tags';
  private readonly Food_By_Search_URL=this.Food_URL+'/search/';
  private readonly Food_By_Tag_URL=this.Food_URL+'/tag/';
  private readonly Food_By_Id_URL=this.Food_URL+'/';

  //methods
  getAll(){
    return sample_foods;
  }

  getAllBySearch(searchTerm:string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_Tags
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All" ?
     this.getAll():
     this.getAll().filter(food => food.tags?.includes(tag))
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id  == foodId) ?? new Food();
  }
  // getAllFoodsBySearchTerm(searchTerm:string){
  //   return this.http.get<Food[]>(this.Food_By_Search_URL+searchTerm)
  // }
}
