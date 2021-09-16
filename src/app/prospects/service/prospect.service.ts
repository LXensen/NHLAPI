import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prospects } from '../models/prospects';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  private prospectURL: string = 'https://statsapi.web.nhl.com/api/v1/draft/prospects';
  
  constructor(private http: HttpClient) { }

  getDraftProspect(prospectId: number): Observable<Prospects> {
    const url = `${this.prospectURL}/${prospectId}`;

    return this.http.get<Prospects>(url);
  }
}
