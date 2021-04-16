import { BoxScore } from './../model/box-score';
import { LineScore } from './../model/line-score';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../model/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getSchedule(): Observable<Schedule> {
    const url = 'https://statsapi.web.nhl.com/api/v1/schedule';

    return this.http.get<Schedule>(url);
  }

  // getTeamScheduleByDate(): Observable<any> {
  // }

  getBoxScore(id: string): Observable<any> {
    const url = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;

    return this.http.get<any>(url);
  }

  getLineScore(id: string): Observable<LineScore> {
    const url = `https://statsapi.web.nhl.com/api/v1/game/${id}/linescore`;

    return this.http.get<LineScore>(url);
  }
}
