import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamsHelper } from '../shared/teams-helper';

import { DraftComponent } from './draft.component';

describe('DraftComponent', () => {
  let component: DraftComponent;

  let fixture: ComponentFixture<DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [ TeamsHelper ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
