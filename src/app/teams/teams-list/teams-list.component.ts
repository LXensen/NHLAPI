import { TeamsService } from './../service/teams.service';
import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NHLTeams } from '../model/nhlteams';
import { Router } from '@angular/router';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teams$!: Observable<NHLTeams>;

  constructor(private teamsService: TeamsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teams$ = this.teamsService.getTeams();

    // this.teamsService.getTeams().subscribe(data => {
    // });
  }

  goToTeam(teamID: number): void{
    this.router.navigate([`teams/${teamID}`]);
  }
}