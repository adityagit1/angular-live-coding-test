import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { FilmService } from '../shared/service/film.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  subsribe: Subscription;
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['title', 'director', 'producer'];

  dataSource = [];

  constructor(private _filmServices: FilmService) {}

  ngAfterViewInit() {
    this.getTableData();
  }

  getTableData() {
    this._filmServices.getRequest('https://swapi.dev/api/films/').subscribe(
      (data: any) => {
        this.dataSource = data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
