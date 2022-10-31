import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  constructor(private http: Http) {}

  public getSpeciality(): Observable<any> {
    return this.http.get('speciality');
  }
}
