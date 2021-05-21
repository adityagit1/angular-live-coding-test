import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ELEMENT_DATA, Film } from '../shared/data/films.data';
import { FilmService } from '../shared/service/film.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  films: Film[] = [];
  changeProductValue: any;

  constructor(private _filmServices: FilmService, private _router: Router) {}

  ngOnInit(): void {
    this.getproductData();
  }

  getproductData() {
    this._filmServices.getRequest('https://swapi.dev/api/films/').subscribe(
      (data: any) => {
        this.films = data.results;
        console.log(this.films);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeProductData(productData) {
    this.changeProductValue = productData;
  }
}
