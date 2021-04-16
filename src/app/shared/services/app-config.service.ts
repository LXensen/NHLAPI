import { CurrentSeason } from './../models/current-season';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public currentSeason: CurrentSeason | undefined;

  constructor(private http: HttpClient) { }

  // Init(): Promise<CurrentSeason> {
  //   const promise = this.http.get<CurrentSeason>('https://statsapi.web.nhl.com/api/v1/seasons/current')
  //     .toPromise()
  //     .then(data => {
  //         Object.assign(this, data);
  //         return data;
  //     });
  //   return promise;
  // }

  Init(): Promise<any> {
    return new Promise((resl, reject) => {
      this.http.get<CurrentSeason>('https://statsapi.web.nhl.com/api/v1/seasons/current')
      .subscribe(data => {
        this.currentSeason = data;

        resl(true);
      });
    });
  }
}
