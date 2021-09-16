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
  private scheduleURL: string = 'https://statsapi.web.nhl.com/api/v1/schedule';
  private gameURL: string = 'https://statsapi.web.nhl.com/api/v1/game';

  constructor(private http: HttpClient) { }

  getSchedule(): Observable<Schedule> {
    return this.http.get<Schedule>(this.scheduleURL);
  }

  // getTeamScheduleByDate(): Observable<any> {
  // }

  getBoxScore(id: string): Observable<any> {
    const url = `${this.gameURL}/${id}/boxscore`;

    return this.http.get<any>(url);
  }

  getLineScore(id: string): Observable<LineScore> {
    const url = `${this.gameURL}/${id}/linescore`;

    return this.http.get<LineScore>(url);
  }
}
