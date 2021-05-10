import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxscoredetailComponent } from './boxscoredetail.component';

describe('BoxscoredetailComponent', () => {
  let component: BoxscoredetailComponent;
  let fixture: ComponentFixture<BoxscoredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxscoredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxscoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
