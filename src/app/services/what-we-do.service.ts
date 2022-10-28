import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhatWeDoService {
  constructor(private http: Http, private http2: HttpClient) {}

  getWhatWedo() {
    let url = 'http://191.101.14.70:5005/what-we-do';
    return this.http2.get(url);
  }

  // public getWhatWedo(): Observable<any> {
  //   return this.http.get('what-we-do');
  // }
}
