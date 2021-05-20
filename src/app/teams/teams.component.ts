import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { NHLTeams } from './model/nhlteams';
import { TeamsService } from './service/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  nhlTeams!: NHLTeams | null;
  constructor(private storage: LocalStorageService,
    private teamsService: TeamsService) { }

  ngOnInit(): void {
    if (this.storage.get<NHLTeams>('teams') === null){
      this.teamsService.getTeams().subscribe(teamsData => {
        this.nhlTeams = teamsData;
        this.storage.set('teams', teamsData);
      });
    }
    this.nhlTeams = this.storage.get<NHLTeams>('teams');
  }

}
