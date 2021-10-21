import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Prospects } from 'src/app/prospects/models/prospects';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {
  prospect$!: Observable<Prospects>;
  @Input() set prospectId(value: number){
    this.getPlayer(value);
  }
  
  constructor(private prospectSvc: ProspectService,
              private route: ActivatedRoute,) { 
                this.route.paramMap.subscribe(params => {
                  const id = params.get('id') as any;
                  this.getPlayer(Number(id));
                });
              }

  ngOnInit(): void {
  }

  getPlayer(id: number): void {
    this.prospect$ = this.prospectSvc.getDraftProspect(id);
  }

  prospectAge(date: string): string{
    var today = new Date();
    var bdate = new Date(date.replace('-','/'));
    let yearDiff = today.getFullYear() - bdate.getFullYear();
    let monthDiff = today.getMonth() - bdate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    return `${yearDiff}`
  }
}
