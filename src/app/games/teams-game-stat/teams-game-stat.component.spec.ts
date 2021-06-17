import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGameStatComponent } from './teams-game-stat.component';
import { TeamsHelper } from 'src/app/shared/teams-helper';

describe('TeamsGameStatComponent', () => {
  let component: TeamsGameStatComponent;
  let fixture: ComponentFixture<TeamsGameStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsGameStatComponent ],
      providers: [ TeamsHelper]
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
