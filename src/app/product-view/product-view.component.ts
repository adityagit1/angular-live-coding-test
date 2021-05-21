import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../shared/service/film.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  changeProductValue: any;
  filterValue: any;

  constructor(
    private _activatedRouting: ActivatedRoute,
    private _filmServices: FilmService
  ) {
    this._activatedRouting.params.subscribe((params: any) => {
      this.filterValue = params['id'];
    });
  }

  ngOnInit() {
    this.getproductData();
  }

  /* 
  Beuse i do Not Have the Api and Dta Sgould Be Dynamic So i had Call the back api and 
  put the Filter and find out the value on the Basis Of episode_id
  
  */
  getproductData() {
    this._filmServices.getRequest('https://swapi.dev/api/films/').subscribe(
      (data: any) => {
        this.changeProductValue = data.results.find(
          (o) => o.episode_id == this.filterValue
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
