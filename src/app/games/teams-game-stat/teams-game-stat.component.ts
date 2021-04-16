import { TeamsHelper } from 'src/app/shared/teams-helper';
import { StatDataItem } from './StatDataItem';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-game-stat',
  templateUrl: './teams-game-stat.component.html',
  styleUrls: ['./teams-game-stat.component.css']
})
export class TeamsGameStatComponent implements OnInit {
  @Input() dataItem!: StatDataItem;

  awayTeamPercent = 0;
  homeTeamPercent = 0;

  awayTeamPrimary = '';
  homeTeamPrimary = '';

  constructor(private helper: TeamsHelper,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.awayTeamPrimary = this.helper.getTeamSecondaryColorById(this.dataItem.AwayID);
    this.homeTeamPrimary = this.helper.getTeamPrimaryColorById(this.dataItem.HomeID);
    this.awayTeamPercent = (this.dataItem.AwayValue / (this.dataItem.AwayValue + this.dataItem.HomeValue)) * 100 ;
    this.homeTeamPercent = (this.dataItem.HomeValue / (this.dataItem.AwayValue + this.dataItem.HomeValue)) * 100 ;
  }
}
