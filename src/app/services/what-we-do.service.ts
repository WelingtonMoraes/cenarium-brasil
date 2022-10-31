import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhatWeDoService {
  constructor(private http: Http, private http2: HttpClient) {}

  // public getWhatWeDo(): Observable<any> {
  //   let url = 'http://localhost:5005/what-we-do';
  //   return this.http2.get<any>(url);
  // }

  public getWhatWeDo(): Observable<any> {
    return this.http.get<any>('what-we-do');
  }
}
