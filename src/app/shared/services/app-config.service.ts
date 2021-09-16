import { Seasons } from '../models/seasons';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Season } from '../models/season';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public currentSeason: Season | undefined;
  public Seasons: Seasons | undefined;
  
  constructor(private http: HttpClient) { 
    this.http.get<Seasons>('https://statsapi.web.nhl.com/api/v1/seasons')
    .subscribe(seasons => {
      this.Seasons = seasons;
    })
  }

  Init(): Promise<Season> {
    return new Promise((resl, reject) => {
      this.http.get<Seasons>('https://statsapi.web.nhl.com/api/v1/seasons/current')
      .subscribe(data => {
        this.currentSeason = data.seasons[0];
        resl(this.currentSeason);
      });
    });
  }
}
