import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { NHLTeams } from './model/nhlteams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  nhlTeams!: NHLTeams | null;
  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.nhlTeams = this.storage.get<NHLTeams>('teams');
  }

}
