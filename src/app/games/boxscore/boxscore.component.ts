import { ScheduleService } from './../service/schedule.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-boxscore',
  templateUrl: './boxscore.component.html',
  styleUrls: ['./boxscore.component.css']
})
export class BoxscoreComponent implements OnInit {
  boxscore$!: Observable<any>;

  test$!: Observable<any>;

  awayPlayers = new Array<any>();
  homePlayers = new Array<any>();

  constructor(private scheduleSVC: ScheduleService,
              private route: ActivatedRoute) {
                this.route.paramMap.subscribe(params => {
                  // tslint:disable-next-line: no-non-null-assertion
                  const id = params.get('id')!.toString();
                  this.getBoxscore(id);
                });
              }

  ngOnInit(): void {
  }

  getBoxscore(id: string): void {
    this.boxscore$ = this.scheduleSVC.getBoxScore(id).pipe(
      map(bxs => {

        Object.entries(bxs.teams.home.players).forEach(
          ([key, value]) => {
            const myvar: any = value;
            if (!bxs.teams.home.scratches.includes(myvar.person.id)){
              // console.log(value);
              // delete bxs.teams.home.players[key];
               this.homePlayers.push(value);
            }
          }
        );

        Object.entries(bxs.teams.away.players).forEach(
          ([key, value]) => {
            const myvar: any = value;
            if (!bxs.teams.away.scratches.includes(myvar.person.id)){
              // console.log(value);
              // delete bxs.teams.away.players[key];
              this.awayPlayers.push(value);
            }
          }
        );
        return;
      })
    );
    // this.boxscore$ = this.scheduleSVC.getBoxScore(id);

    // this.scheduleSVC.getBoxScore(id).subscribe(data => {
    //   //console.log(data);
    // });

    this.boxscore$.subscribe(data => {
      // console.log(data);
      // console.log(this.homePlayers);
    });
  }

  outputdata(data: any): void {
    // console.log(data);
  }
}
