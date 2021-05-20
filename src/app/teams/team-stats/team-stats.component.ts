import { Stats } from './../model/stats';
import { TeamsService } from './../service/teams.service';
import { Observable } from 'rxjs';
import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface SortBy {
  value: number;
  rank: string;
}

export type SortColumn = keyof SortBy | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {
  stat$!: Observable<Stats>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | undefined;

  onSort({column, direction}: SortEvent){
debugger;
  }

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
