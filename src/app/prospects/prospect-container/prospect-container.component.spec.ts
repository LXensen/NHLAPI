import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectContainerComponent } from './prospect-container.component';

describe('ProspectContainerComponent', () => {
  let component: ProspectContainerComponent;
  let fixture: ComponentFixture<ProspectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
