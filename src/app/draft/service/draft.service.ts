import { Drafts } from './../models/drafts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  private draftStartYear = 1963;
  private draftURL: string = 'https://statsapi.web.nhl.com/api/v1/draft';
  
  
  constructor(private http: HttpClient) { }

  get StartDraftyear(): number {
    return this.draftStartYear;
  }

  getDraftForYear(year: string): Observable<Drafts> {
    const url = `${this.draftURL}/${year}`;

    return this.http.get<Drafts>(url);
  }
}
