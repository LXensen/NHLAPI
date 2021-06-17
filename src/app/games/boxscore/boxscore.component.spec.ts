import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BoxscoreComponent } from './boxscore.component';

describe('BoxscoreComponent', () => {
  let component: BoxscoreComponent;
  let fixture: ComponentFixture<BoxscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxscoreComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
