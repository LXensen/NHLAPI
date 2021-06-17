import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { GamedetailComponent } from './gamedetail.component';

describe('GamedetailComponent', () => {
  let component: GamedetailComponent;
  let fixture: ComponentFixture<GamedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedetailComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, NgbNavModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
