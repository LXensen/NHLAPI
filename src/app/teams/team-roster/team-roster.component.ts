import { TeamsService } from './../service/teams.service';
import { Component, OnInit } from '@angular/core';
import { RosterList } from '../model/roster';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {
  roster$!: Observable<RosterList>;

  constructor(private teamsService: TeamsService,
              private route: ActivatedRoute) {
                this.route.paramMap.subscribe(params => {
                  // tslint:disable-next-line: no-non-null-assertion
                  const id = params.get('id')!;
                  // tslint:disable-next-line: radix
                  this.getRoster(parseInt(id));
                });
              }

  ngOnInit(): void {
  }

  getRoster(teamID: number): void {
    this.roster$ = this.teamsService.getTeamRoster(teamID);
  }
}
