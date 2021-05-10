import { PlayersService } from './../service/players.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../model/player';
import { Observable, of } from 'rxjs';
import { StatsSingleSeason } from '../model/stats-single-season';
import { StatsCareer } from '../model/stats-career';
import { TeamsHelper } from 'src/app/shared/teams-helper';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player$!: Observable<Player>;
  currentSeasonStat$!: Observable<StatsSingleSeason>;
  careerStats$!: Observable<StatsCareer>;

  player!: Player;

  constructor(private playerSvc: PlayersService,
              private route: ActivatedRoute,
              private teams: TeamsHelper) {
                this.route.paramMap.subscribe(params => {
                  // tslint:disable-next-line: no-non-null-assertion
                  const id = params.get('id')!;

                  // tslint:disable-next-line: radix
                  this.getPlayer(parseInt(id));
                  this.getPlayerStatsCareer(parseInt(id, 10));
                  // this.getPlayerStatCurrentSeason(parseInt(id, 10));
                });
               }

  ngOnInit(): void {
  }

  teamAbbr(id: number): string {
    return this.teams.getTeamAbbrById(id);
  }
  getPlayer(id: number): void {
    this.player$ = this.playerSvc.getPlayer(id);

    // this.playerSvc.getPlayer(id).subscribe(data => {
    //   console.log(data);
    // });
  }

  getPlayerStatSingleSeason(id: number, season: string): void {
    this.currentSeasonStat$ = this.playerSvc.getPlayerStatsSingleSeason(id, '20202021');

    // this.playerSvc.getPlayerStatsSingleSeason(id, '').subscribe(data => {
    //   debugger;
    // });
  }

  getPlayerStatsCareer(id: number): void {
    this.careerStats$ = this.playerSvc.getPlayerStatsCareer(id);

    // this.playerSvc.getPlayerStatsCareer(id).subscribe(data => {
    //   console.log(data);
    // });
  }
}
