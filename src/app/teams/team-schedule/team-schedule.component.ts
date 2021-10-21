import { TeamsHelper } from 'src/app/shared/teams-helper';
import { TeamMonthlySchedule, Match } from './../model/team-monthly-schedule';
import { TeamsService } from './../service/teams.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-schedule',
  templateUrl: './team-schedule.component.html',
  styleUrls: ['./team-schedule.component.css']
})
export class TeamScheduleComponent implements OnInit {
  currentMonth = new Date().getMonth();

  private teamID = 0;
  private selectedSeasonId: string;

  schedule$!: Observable<TeamMonthlySchedule>;

  constructor(private teamSVC: TeamsService,
              private route: ActivatedRoute,
              private teamsHlp: TeamsHelper) {

              this.selectedSeasonId = '';

              this.route.paramMap.subscribe(params => {
              this.teamID = Number(params.get('id') as any);
            });
  }

  ngOnInit(): void {
  }

  getTeamScheduleForMonth(id: number, month: number): void{
    let firstYear = Number(this.selectedSeasonId.slice(0, 4));
    let secondYear = Number(this.selectedSeasonId.slice(4, 8));

    // month < 8 = Jan, Feb, Mar, Apr
    // season = 2021-2022
    const scheduleDate = new Date(month < 8 ? secondYear : firstYear, month, 1);

    this.schedule$ = this.teamSVC.getTeamScheduleByMonth(id, scheduleDate);
    this.teamSVC.getTeamScheduleByMonth(id, scheduleDate).subscribe(data => {
    });
  }

  getMatchDetails(match: Match): string {
    const awayMatch = `${this.teamsHlp.getTeamAbbrById(match.games[0].teams.away.team.id)}&nbsp;&nbsp;&nbsp; ${match.games[0].teams.away.score}`;
    const homeMatch = `${match.games[0].teams.home.score}&nbsp;&nbsp;&nbsp; ${this.teamsHlp.getTeamAbbrById(match.games[0].teams.home.team.id)}`;
    const gameType = match.games[0].gameType === "PR" ? "<small>(pre)</small>" : "";
    return awayMatch + ' - ' + homeMatch + ' ' + gameType;
  }

  getMonth(month: any): void{
    // if month is greater than december, the year will have to be bumped by one
    this.currentMonth = month;
    this.getTeamScheduleForMonth(this.teamID, month);
  }

  getSeason(season: string): void{
    if(season !== undefined){
      if(this.selectedSeasonId !== season){
        this.selectedSeasonId = season;
        this.schedule$ = this.teamSVC.getTeamScheduleBySeason(this.teamID, season)
      }
      // get schedule for season
    }
  }
}
