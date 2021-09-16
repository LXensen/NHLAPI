import { StatsSingleSeason } from './../model/stats-single-season';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { StatsCareer } from '../model/stats-career';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private peopleURL: string = 'https://statsapi.web.nhl.com/api/v1/people';

  constructor(private http: HttpClient) { }

  getPlayer(id: number): Observable<Player> {
    const url = `${this.peopleURL}/${id}`;

    return this.http.get<Player>(url);
  }

  getPlayerStatsSingleSeason(id: number, year: string): Observable<StatsSingleSeason> {
    const url = `${this.peopleURL}/${id}/stats?stats=statsSingleSeason&season=${year}`;

    return this.http.get<StatsSingleSeason>(url);
  }

  getPlayerStatsCareer(id: number): Observable<StatsCareer> {
    const url = `${this.peopleURL}/${id}/stats?stats=yearByYear`;

    return this.http.get<StatsCareer>(url);
  }
}
