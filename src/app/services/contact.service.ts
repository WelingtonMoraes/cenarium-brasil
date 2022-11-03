import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: Http) {}

  public sendEmail(
    name: string,
    contact: string,
    idea: string
  ): Observable<any> {
    return this.http.post('contact', {
      name,
      contact,
      idea,
    });
  }
}
