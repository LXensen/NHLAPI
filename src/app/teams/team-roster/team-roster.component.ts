import { TeamsService } from './../service/teams.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {
  roster$!: Observable<any>;

  private teamId: number = 0;

  constructor(private teamsService: TeamsService,
              private route: ActivatedRoute) {
                this.route.paramMap.subscribe(params => {
                  this.teamId = Number(params.get('id') as any);
                  this.getRoster(this.teamId);
                });
              }
  ngOnInit(): void {
  }

  getRoster(teamID: number): void {
    this.roster$ = this.teamsService.getTeamRoster(teamID).pipe(map(data => {
      return data.roster;
    }));
  }

  getRosterforSeason(season: string): void{
    if(!season === undefined){
      this.roster$ = this.teamsService.getTeamRosterBySeason(this.teamId, season).pipe(map(data => {
        return data.teams[0].roster.roster;
      }));
    }
  }
}
