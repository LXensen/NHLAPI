import { TeamsService } from './../service/teams.service';
import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NHLTeams } from '../model/nhlteams';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teams$!: Observable<NHLTeams>;

  teams!: NHLTeams | null;

  constructor(private teamsService: TeamsService,
              private storage: LocalStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    if (this.storage.get<NHLTeams>('teams') === null){
      this.teamsService.getTeams().subscribe(teamsData => {
        this.teams = teamsData;
        this.storage.set('teams', teamsData);
      });
    }

    this.teams = this.storage.get<NHLTeams>('teams');
    // this.teams$ = this.teamsService.getTeams();

    // this.teamsService.getTeams().subscribe(data => {
    // });
  }

  goToTeam(teamID: number): void{
    this.router.navigate([`teams/${teamID}`]);
  }
}
