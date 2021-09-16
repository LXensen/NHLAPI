import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamsHelper } from 'src/app/shared/teams-helper';

import { TeamDetailCardComponent } from './team-detail-card.component';

describe('TeamDetailCardComponent', () => {
  let component: TeamDetailCardComponent;
  let fixture: ComponentFixture<TeamDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDetailCardComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ TeamsHelper ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
