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

  constructor(private http: HttpClient) { }

  getPlayer(id: number): Observable<Player> {
    const playerURL = `https://statsapi.web.nhl.com/api/v1/people/${id}`;

    return this.http.get<Player>(playerURL);
  }

  getPlayerStatsSingleSeason(id: number, year: string): Observable<StatsSingleSeason> {
    const url = `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=${year}`;

    return this.http.get<StatsSingleSeason>(url);
  }

  getPlayerStatsCareer(id: number): Observable<StatsCareer> {
    const url = `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYear`;

    return this.http.get<StatsCareer>(url);
  }
}
