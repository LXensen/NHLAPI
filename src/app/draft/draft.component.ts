import { Round } from './models/round';
import { Drafts } from './models/drafts';
import { DraftService } from './service/draft.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsHelper } from '../shared/teams-helper';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  draft$!: Observable<Drafts>;
  round: Partial<Round> = {};

  baseDraftYear = new Date().getFullYear();
  selectedDraftYear = this.baseDraftYear;

  draftYears = new Array(60);

  draftRound = 1;

  constructor(private svcDraft: DraftService,
              private route: ActivatedRoute,
              private router: Router,
              public teamsHlp: TeamsHelper) {
                for (let index = 0; index < 60; index++) {
                  this.draftYears[index] = this.baseDraftYear - index;
                }
              }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('year')){
        this.selectedDraftYear = Number(params.get('year') as any);
      }
      if ( params.has('round')){
        this.draftRound = Number(params.get('round') as any);
      }

      this.getDraftForYear(this.selectedDraftYear.toString());
    });
  }

  getDraftForYear(year: string): void{     
      this.svcDraft.getDraftForYear(year).subscribe(data => {
        if (data.drafts[0].rounds)
        { 
          this.round = data.drafts[0].rounds[this.draftRound - 1];
        }
    });

      this.draft$ = this.svcDraft.getDraftForYear(year);
  }

  getYear(year: string): void{
    this.router.navigate(['/draft', year, 1]);
  }

}
