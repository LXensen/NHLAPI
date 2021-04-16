import { ScheduleService } from './../service/schedule.service';
import { Schedule } from './../model/schedule';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule$!: Observable<Schedule>;

  constructor(private scheduleService: ScheduleService,
              private router: Router) { }

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule(): void {
    // this.scheduleService.getSchedule().subscribe(data => {
    //   debugger;
    // })
    // this.schedule$ = this.scheduleService.getSchedule();

    this.schedule$ = timer(0, 10000)
    .pipe(
      concatMap(_ => this.scheduleService.getSchedule()),
      map((response: Schedule) => {
        return response;
      })
    );
  }

  goToGame(gameId: string): void {
    this.router.navigate([`games/${gameId}`]);
  }
}
