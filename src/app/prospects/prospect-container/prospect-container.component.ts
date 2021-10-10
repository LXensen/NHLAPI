import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ProspectComponent } from '../prospect/prospect.component';

@Component({
  selector: 'app-prospect-container',
  template: '',
  styleUrls: []
})
export class ProspectContainerComponent implements OnInit {
  destroy = new Subject<any>();
  currentModal: NgbModalRef | undefined;

  constructor(private viewRef: ViewContainerRef,
              private factResolver: ComponentFactoryResolver,
              private modalSvc: NgbModal,
              route: ActivatedRoute,
              router: Router) {
                route.params.pipe(takeUntil(this.destroy)).subscribe(async params => {
                  debugger;
                  let redirecTo: string = '/draft';
                  if (params.year){
                    redirecTo = `${redirecTo}/${params.year}/${params.round}`;
                  }
                  // round
                  // year
                  //import('../prospect/prospect.component').then(({ProspectComponent}) => {
                    this.viewRef.clear();
                    // const cmp = this.factResolver.resolveComponentFactory(ProspectComponent);
                    // const cmpref = this.viewRef.createComponent(cmp);
                    this.currentModal = this.modalSvc.open(ProspectComponent,{centered: true})
                    this.currentModal.componentInstance.prospectId = params.id;
                    //cmpref.instance.prospectId = params.id;
                  //});
                  // this.currentProspect = this.modalSvc.open(ProspectComponent, {centered: true});
                  // this.currentProspect.componenentInstance.prospectId = params.id;
                  this.currentModal.result.then(result => {
                    debugger
                      router.navigateByUrl(redirecTo);
                  }, reason => {
                    debugger;
                      router.navigateByUrl(redirecTo);
                  });
                })
               }

  ngOnInit(): void {
  }

}
