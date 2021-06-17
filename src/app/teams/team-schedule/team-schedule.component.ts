import { AppConfigService } from './../../shared/services/app-config.service';
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
  months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(x => new Date(2000, x, 2));
  currentMonth = 1;
  teamID = 0;
  schedule$!: Observable<TeamMonthlySchedule>;

  constructor(private teamSVC: TeamsService,
              private route: ActivatedRoute,
              private teamsHlp: TeamsHelper) {
            this.currentMonth = new Date().getMonth();

            this.route.paramMap.subscribe(params => {
              // tslint:disable-next-line: no-non-null-assertion
              this.teamID = parseInt(params.get('id')!, 10);

              this.getTeamScheduleForMonth(this.teamID, this.currentMonth);
            });
  }

  ngOnInit(): void {
  }

  getTeamScheduleForMonth(id: number, month: number): void{
    const scheduleDate = new Date(new Date().getFullYear(), month, 1);
    this.schedule$ = this.teamSVC.getTeamMonthlySchedule(id, scheduleDate);
    // this.teamSVC.getTeamMonthlySchedule(id, scheduleDate).subscribe(data => {
    //   console.log(data);
    // });
  }

  getMatchDetails(match: Match): string {
    const awayMatch = `${this.teamsHlp.getTeamAbbrById(match.games[0].teams.away.team.id)}&nbsp;&nbsp;&nbsp; ${match.games[0].teams.away.score}`;
    const homeMatch = `${match.games[0].teams.home.score}&nbsp;&nbsp;&nbsp; ${this.teamsHlp.getTeamAbbrById(match.games[0].teams.home.team.id)}`;
    return awayMatch + ' - ' + homeMatch;
  }

  getDate(month: any): void{
    this.getTeamScheduleForMonth(this.teamID, month);
  }
}
