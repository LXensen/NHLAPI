import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';
import { Seasons } from '../../models/seasons';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(x => new Date(2000, x, 2));
  seasons: Seasons;
  currentMonth = 20;

  selectedSeason = '';

  @Output() season = new EventEmitter<string>();
  @Output() month = new EventEmitter<number>();
  @Input() showMonth = true;

  constructor(private appConfigService: AppConfigService) {
    // this.currentMonth = new Date().getMonth();
    // this.currentSeasonId = this.appConfigService.currentSeason?.seasonId as any;
    this.seasons = this.appConfigService.Seasons as any;
  }

  ngOnInit(): void {
    this.selectedSeason = this.seasons.seasons[this.seasons.seasons.length - 1].seasonId;

    this.month.emit(this.currentMonth);
    this.season.emit(this.selectedSeason);
  }

  getMonth(month: any): void{
    this.currentMonth = month;
    this.month.emit(month);
  }

  getSeason(season: any): void{
    this.selectedSeason = season;
    this.currentMonth = 20;
    this.season.emit(season);
  }
}
