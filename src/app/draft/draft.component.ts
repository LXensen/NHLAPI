import { element } from 'protractor';
import { Drafts } from './models/drafts';
import { DraftService } from './service/draft.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  draft$!: Observable<Drafts>;
  draftYear!: number;

  draftYears = new Array(60);

  draftRound = 1;

  constructor(private svcDraft: DraftService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('year')){
        // tslint:disable-next-line: no-non-null-assertion
        this.draftYear = parseInt(params.get('year')!, 10);

        for (let index = 0; index < 60; index++) {
          this.draftYears[index] = this.draftYear - index;
        }
      }
      if ( params.has('round')){
        // tslint:disable-next-line: no-non-null-assertion
        this.draftRound = parseInt(params.get('round')!, 10);
      }
      this.getYear(this.draftYear.toString());
    });
  }

  getDraftForYear(year: string): void{
      this.svcDraft.getDraftForYear(year).subscribe(data => {
      console.log(data);
    });

      this.draft$ = this.svcDraft.getDraftForYear(year);
  }

  getYear(year: string): void{
    const val = year === null ? this.draftYear : year;
    // tslint:disable-next-line: no-non-null-assertion
    debugger;
    this.draftYear = parseInt(year, 10);
    this.getDraftForYear(val.toString());
  }

}
