import { PlayersService } from './../service/players.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../model/player';
import { Observable, of } from 'rxjs';
import { StatsSingleSeason } from '../model/stats-single-season';
import { StatsCareer } from '../model/stats-career';
import { TeamsHelper } from 'src/app/shared/teams-helper';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { Seasons } from 'src/app/shared/models/seasons';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player$!: Observable<Player>;
  currentSeasonStat$!: Observable<StatsSingleSeason>;
  careerStats$!: Observable<StatsCareer>;

  seasons: Seasons;
  currentSeasonId: string;
  player!: Player;

  constructor(private playerSvc: PlayersService,
              private route: ActivatedRoute,
              private teams: TeamsHelper,
              private appConfigService: AppConfigService) {
                this.currentSeasonId = this.appConfigService.currentSeason?.seasonId as any;
                this.seasons = this.appConfigService.Seasons as any;

                this.route.paramMap.subscribe(params => {
                  const id = params.get('id') as any;

                  this.getPlayer(Number(id));
                  this.getPlayerStatsCareer(Number(id));
                  //this.getPlayerStatSingleSeason(Number(id), this.currentSeasonId);
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
    this.currentSeasonStat$ = this.playerSvc.getPlayerStatsSingleSeason(id, season);

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
