import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhatWeDoService {
  constructor(private http: Http) {}

  public getWhatWedo(): Observable<any> {
    return this.http.get('what-we-do');
  }
}
