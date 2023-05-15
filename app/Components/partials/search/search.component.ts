import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor(private _activatedRoute:ActivatedRoute , private router:Router){}

  searchTerm='';
  ngOnInit(): void {
   this._activatedRoute.params.subscribe((params) => {
    if(params.searchTerm) this.searchTerm=params.searchTerm
   })
  }

  search(term:string){
   if(term)
     this.router.navigateByUrl('/search/'+term)
  }
}
