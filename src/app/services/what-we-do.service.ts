import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class WhatWeDoService {
  constructor(private http: HttpClient) {}

  getWhatWedo() {
    let url = 'http://191.101.14.70:5005/what-we-do';
    return this.http.get(url);
  }

  // public getWhatWedo(): any {
  //   return this.http.get('what-we-do');
  // }
}
