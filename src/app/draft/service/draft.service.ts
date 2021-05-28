import { Drafts } from './../models/drafts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  private draftStartYear = 1963;

  constructor(private http: HttpClient) { }

  get StartDraftyear(): number {
    return this.draftStartYear;
  }

  getDraftForYear(year: string): Observable<Drafts> {
    const teamsURL = `https://statsapi.web.nhl.com/api/v1/draft/${year}`;

    return this.http.get<Drafts>(teamsURL);
  }
}
