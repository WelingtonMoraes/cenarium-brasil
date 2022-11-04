import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhatWeDoService {
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': '*',
  };

  requestOptions = {
    headers: new Headers(this.headerDict),
  };

  constructor(private http: Http) {}

  public getWhatWedo(): Observable<any> {
    return this.http.get('what-we-do', this.requestOptions);
  }
}
