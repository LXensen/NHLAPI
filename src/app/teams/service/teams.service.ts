import { Stats } from './../model/stats';
import { TeamMonthlySchedule } from './../model/team-monthly-schedule';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { NHLTeam } from '../model/nhlteam';
import { NHLTeams } from '../model/nhlteams';
import { HttpClient } from '@angular/common/http';
import { RosterList } from '../model/roster';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<NHLTeams> {
    const teamsURL = 'https://statsapi.web.nhl.com/api/v1/teams';

    return this.http.get<NHLTeams>(teamsURL);
  }

  getTeamById(id: number): Observable<NHLTeam> {
    const teamURL = `https://statsapi.web.nhl.com/api/v1/teams/${id}`;

    return this.http.get<NHLTeam>(teamURL);
  }

  getTeamRoster(id: number): Observable<RosterList> {
    const teamURL = `https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`;

    return this.http.get<RosterList>(teamURL);
  }

  getTeamMonthlySchedule(id: number, date: Date): Observable<TeamMonthlySchedule> {
    const startDate = `${date.getFullYear()}-${date.getMonth() + 1}-01`;
    const tempEndDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const endDate = `${tempEndDate.getFullYear()}-${tempEndDate.getMonth() + 1}-${tempEndDate.getDate()}`;

    const teamURL = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}&startDate=${startDate}&endDate=${endDate}`;

    return this.http.get<TeamMonthlySchedule>(teamURL);
  }

  getTeamStats(id: number): Observable<Stats> {
    const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;

    return this.http.get<Stats>(url);
  }

  getTeamSchedule(id: number): Observable<any> {
    const teamURL = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}&startDate=2021-03-01&endDate=2021-03-31`;

    return this.http.get(teamURL);
  }

  getTeamNextGame(id: number): Observable<any> {
    const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/?expand=team.schedule.next`;

    return this.http.get(url);
  }

  getTeamPreviousGame(id: number): Observable<any> {
    const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/?expand=team.schedule.previous`;

    return this.http.get(url);
  }
}
