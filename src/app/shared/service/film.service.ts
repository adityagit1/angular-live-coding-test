import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Add your code for getting films here

@Injectable({ providedIn: 'root' })
export class FilmService {
  constructor(private httpClient: HttpClient) {}

  /*
   *This is Simple Method For get Request
   *becuse of Demo I had not pass any Header Model
   */
  getRequest(url) {
    return this.httpClient.get(url);
  }
}
