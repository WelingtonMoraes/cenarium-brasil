import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': '*',
  };

  requestOptions = {
    headers: new Headers(this.headerDict),
  };

  constructor(private http: Http) {}

  public getSpeciality(): Observable<any> {
    return this.http.get('speciality', this.requestOptions);
  }

  public getSpecialityDetails(_id: string): Observable<any> {
    return this.http.get('speciality/' + _id, this.requestOptions);
  }
}
