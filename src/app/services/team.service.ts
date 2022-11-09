import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: Http) {}

  public getTeam(): Observable<any> {
    return this.http.get('team');
  }
}
