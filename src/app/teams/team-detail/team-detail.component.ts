import { Observable } from 'rxjs';
import { TeamsService } from './../service/teams.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NHLTeam } from '../model/nhlteam';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team$!: Observable<NHLTeam>;
  team!: NHLTeam;

  active = 1;
  constructor(private teamsService: TeamsService,
              private route: ActivatedRoute) {
                this.route.paramMap.subscribe(params => {
                  // tslint:disable-next-line: no-non-null-assertion
                  const id = params.get('id')!;
                  // tslint:disable-next-line: radix
                  this.getTeam(parseInt(id));
                });
              }

  ngOnInit(): void {
  }

  getTeam(id: number): void {
      this.team$ = this.teamsService.getTeamById(id);

      // this.teamsService.getTeamById(id).subscribe(data => {
      //   debugger;
      // });
  }
}
