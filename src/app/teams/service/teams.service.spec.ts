import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TeamsService } from './teams.service';
import { NHLTeams } from '../model/nhlteams';

fdescribe('TeamsService', () => {
  let service: TeamsService;
  let httpTestingConroller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamsService]
    });

    httpTestingConroller = TestBed.inject(HttpTestingController);

    service = TestBed.inject(TeamsService);
  });

  afterEach(() => {
    httpTestingConroller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Team', (done) => {
    // tslint:disable-next-line: variable-name
    const static_sens: NHLTeams = {
      copyright: 'test',
      teams:
      [{
        id : 9,
        name : 'Ottawa Senators',
        link : '/api/v1/teams/9',
        venue : {
          id : 5031,
          name : 'Canadian Tire Centre',
          link : '/api/v1/venues/5031',
          city : 'Ottawa',
          timeZone : {
            id : 'America/New_York',
            offset : -4,
            tz : 'EDT'
          }
        },
        abbreviation : 'OTT',
        teamName : 'Senators',
        locationName : 'Ottawa',
        firstYearOfPlay : 1990,
      division : {
          id : 17,
          name : 'Atlantic',
          nameShort : 'ATL',
          link : '/api/v1/divisions/17',
          abbreviation : 'A'
        },
        conference : {
          id : 6,
          name : 'Eastern',
          link : '/api/v1/conferences/6'
        },
        franchise : {
          franchiseId : 30,
          teamName : 'Senators',
          link : '/api/v1/franchises/30'
        },
        shortName : 'Ottawa',
        officialSiteUrl : 'http://www.ottawasenators.com/',
        franchiseId : 30,
        active : true
    }]};

    service.getTeamById(9).subscribe(teams => {
      expect(teams.teams.length).toEqual(1);
      expect(teams.teams[0].name).toBe('Ottawa Senators');
      expect(teams.teams[0]).toEqual(static_sens.teams[0]);

      done();
    });

    const tstRequest = httpTestingConroller.expectOne('https://statsapi.web.nhl.com/api/v1/teams/9');

    tstRequest.flush(static_sens);
  });
});
