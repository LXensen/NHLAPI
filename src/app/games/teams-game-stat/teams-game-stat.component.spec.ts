import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGameStatComponent } from './teams-game-stat.component';

describe('TeamsGameStatComponent', () => {
  let component: TeamsGameStatComponent;
  let fixture: ComponentFixture<TeamsGameStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsGameStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsGameStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
