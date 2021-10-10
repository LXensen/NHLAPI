import { Stats } from './../model/stats';
import { TeamMonthlySchedule } from './../model/team-monthly-schedule';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { NHLTeam } from '../model/nhlteam';
import { NHLTeams } from '../model/nhlteams';
import { HttpClient } from '@angular/common/http';
import { RosterList } from '../model/roster-list';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private teamsURL: string = 'https://statsapi.web.nhl.com/api/v1/teams';
  private scheduleURL: string = 'https://statsapi.web.nhl.com/api/v1/schedule';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<NHLTeams> {
    return this.http.get<NHLTeams>(this.teamsURL);
  }

  getTeamById(id: number): Observable<NHLTeam> {
    const url = `${this.teamsURL}/${id}`;

    return this.http.get<NHLTeam>(url);
  }

  getTeamRoster(id: number): Observable<RosterList> {
    const url = `${this.teamsURL}/${id}/roster`;

    return this.http.get<RosterList>(url);
  }

  getTeamRosterBySeason(id: number, season: string): Observable<NHLTeams> {
    const url = `${this.teamsURL}/${id}?expand=team.roster&season=${season}`;

    return this.http.get<NHLTeams>(url);
  }
  getTeamScheduleByMonth(id: number, date: Date): Observable<TeamMonthlySchedule> {
    const startDate = `${date.getFullYear()}-${date.getMonth() + 1}-01`;
    const tempEndDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const endDate = `${tempEndDate.getFullYear()}-${tempEndDate.getMonth() + 1}-${tempEndDate.getDate()}`;

    const url = `${this.scheduleURL}?teamId=${id}&startDate=${startDate}&endDate=${endDate}`;
console.log(url);
    return this.http.get<TeamMonthlySchedule>(url);
  }

  getTeamScheduleBySeason(id: number, season: string): Observable<any> {
    const url = `${this.scheduleURL}?teamId=${id}&season=${season}`;

    return this.http.get(url);
  }

  getTeamStats(id: number): Observable<Stats> {
    const url = `${this.teamsURL}/${id}/stats`;

    return this.http.get<Stats>(url);
  }

  getTeamNextGame(id: number): Observable<any> {
    const url = `${this.teamsURL}/${id}/?expand=team.schedule.next`;

    return this.http.get(url);
  }

  getTeamPreviousGame(id: number): Observable<any> {
    const url = `${this.teamsURL}/${id}/?expand=team.schedule.previous`;

    return this.http.get(url);
  }
}
