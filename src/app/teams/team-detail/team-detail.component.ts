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

  season: string = '';
  active:number = 1;
  constructor(private teamsService: TeamsService,
              private route: ActivatedRoute) {

              }

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      // we'll always have the first element, which is the team ID
      // 0 - Team ID
      // 1 - roster or schedule
      // 2 - season 0 20202021 format
      this.getTeam(Number(data[0].path));
      data.forEach(segment => {
        if(segment.path === 'roster'){
          this.active = 1;
        }
        if(segment.path === 'schedule'){
          this.active = 2;
        }
      })
    })
  }

  getTeam(id: number): void {
      this.team$ = this.teamsService.getTeamById(id);
      // this.teamsService.getTeamById(id).subscribe(data => {
      //   debugger;
      // });
  }
}
