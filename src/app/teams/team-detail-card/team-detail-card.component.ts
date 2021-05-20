import { TeamsService } from './../service/teams.service';
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { Stats } from './../model/stats';
import { map } from 'rxjs/operators';
import { TeamsHelper } from 'src/app/shared/teams-helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-detail-card',
  templateUrl: './team-detail-card.component.html',
  styleUrls: ['./team-detail-card.component.css']
})
export class TeamDetailCardComponent implements OnInit {
  @Input() teamId!: number;

  stat$!: Observable<any>;

  teamStat!: Stats;
  prevGame!: any;
  nextGame!: any;

  constructor(private teamSVC: TeamsService,
              private router: Router,
              public teamsHlp: TeamsHelper) { }

  ngOnInit(): void {

    this.getTeamDetails();
  }

  getTeamDetails(): void {
    this.stat$ = combineLatest([
      this.teamSVC.getTeamStats(this.teamId),
      this.teamSVC.getTeamNextGame(this.teamId),
      this.teamSVC.getTeamPreviousGame(this.teamId)
    ]).pipe(
      map(([stat, nextgame, prevgame]) => {
        this.teamStat = stat;
        this.nextGame = nextgame;
        this.prevGame = prevgame;
        return {stat, nextgame, prevgame};
    }));
  }

  goToTeam(teamID: number): void{
    this.router.navigate([`teams/${teamID}`]);
  }
}
