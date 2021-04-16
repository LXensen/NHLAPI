import { Stats } from './../model/stats';
import { TeamsService } from './../service/teams.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {
  stat$!: Observable<Stats>;

  constructor(private teamSVC: TeamsService,
              private route: ActivatedRoute) {
                this.route.paramMap.subscribe(params => {
                  // tslint:disable-next-line: no-non-null-assertion
                  const id = params.get('id')!;

                  this.getTeamStats(parseInt(id, 10));
                });
               }

  ngOnInit(): void {

  }

  getTeamStats(id: number): void {
    // this.teamSVC.getTeamStats(id).subscribe(data => {
    //   console.log(data);
    // });

    this.stat$ = this.teamSVC.getTeamStats(id);
  }
}
