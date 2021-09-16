export interface ITeamsConstants {
    id: number;
    name: string;
    link: string;
    venue: {
      id?: number;
      name: string;
      link: string;
      city: string;
      timeZone: {
        id: string;
        offset: number;
        tz: string;
      };
    };
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: number;
    division: {
      id: number;
      name: string;
      link: string
    };
    conference: {
      id: number;
      name: string;
      link: string;
    };
    shortName: string;
    officialSiteUrl: string;
    franchiseId: number;
    active: boolean;
    primaryColor: string;
    secondaryColor: string;
    logo: string;
}

export class TeamsHelper {
    public static Teams: Array<ITeamsConstants> = new Array(
        {
          id: 1,
          name: 'New Jersey Devils',
          link: '/api/v1/teams/1',
          venue: {
            name: 'Prudential Center',
            link: '/api/v1/venues/null',
            city: 'Newark',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'NJD',
          teamName: 'Devils',
          locationName: 'New Jersey',
          firstYearOfPlay: 1982,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'New Jersey',
          officialSiteUrl: 'http://www.newjerseydevils.com/',
          franchiseId: 23,
          active: true,
          primaryColor: '#E51A37',
          secondaryColor: '#000',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/301891622/binary-file/file.svg'
        },
        {
          id: 2,
          name: 'New York Islanders',
          link: '/api/v1/teams/2',
          venue: {
            name: 'Nassau Veterans Memorial Coliseum',
            link: '/api/v1/venues/null',
            city: 'Uniondale',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'NYI',
          teamName: 'Islanders',
          locationName: 'New York',
          firstYearOfPlay: 1972,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'NY Islanders',
          officialSiteUrl: 'http://www.newyorkislanders.com/',
          franchiseId: 22,
          active: true,
          primaryColor: '#F57C31',
          secondaryColor: '#05539B',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/316482732/binary-file/file.svg'
        },
        {
          id: 3,
          name: 'New York Rangers',
          link: '/api/v1/teams/3',
          venue: {
            id: 5054,
            name: 'Madison Square Garden',
            link: '/api/v1/venues/5054',
            city: 'New York',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'NYR',
          teamName: 'Rangers',
          locationName: 'New York',
          firstYearOfPlay: 1926,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'NY Rangers',
          officialSiteUrl: 'http://www.newyorkrangers.com/',
          franchiseId: 10,
          active: true,
          primaryColor: '#065EAB',
          secondaryColor: '#FFF',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/289471614/binary-file/file.svg'
        },
        {
          id: 4,
          name: 'Philadelphia Flyers',
          link: '/api/v1/teams/4',
          venue: {
            id: 5096,
            name: 'Wells Fargo Center',
            link: '/api/v1/venues/5096',
            city: 'Philadelphia',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'PHI',
          teamName: 'Flyers',
          locationName: 'Philadelphia',
          firstYearOfPlay: 1967,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Philadelphia',
          officialSiteUrl: 'http://www.philadelphiaflyers.com/',
          franchiseId: 16,
          active: true,
          primaryColor: '#F37737',
          secondaryColor: '#000',
          logo: '//www-league.nhlstatic.com/images/logos/teams-current-primary-light/4.svg'
        },
        {
          id: 5,
          name: 'Pittsburgh Penguins',
          link: '/api/v1/teams/5',
          venue: {
            id: 5034,
            name: 'PPG Paints Arena',
            link: '/api/v1/venues/5034',
            city: 'Pittsburgh',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'PIT',
          teamName: 'Penguins',
          locationName: 'Pittsburgh',
          firstYearOfPlay: 1967,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Pittsburgh',
          officialSiteUrl: 'http://pittsburghpenguins.com/',
          franchiseId: 17,
          active: true,
          primaryColor: '#FEB81D',
          secondaryColor: '#000',
          logo: '//www-league.nhlstatic.com/images/logos/teams-current-primary-light/5.svg'
        },
        {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          venue: {
            id: 5085,
            name: 'TD Garden',
            link: '/api/v1/venues/5085',
            city: 'Boston',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'BOS',
          teamName: 'Bruins',
          locationName: 'Boston',
          firstYearOfPlay: 1924,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Boston',
          officialSiteUrl: 'http://www.bostonbruins.com/',
          franchiseId: 6,
          active: true,
          primaryColor: '#231F21',
          secondaryColor: '#FCCB34',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/301172494/binary-file/file.svg'
        },
        {
          id: 7,
          name: 'Buffalo Sabres',
          link: '/api/v1/teams/7',
          venue: {
            id: 5039,
            name: 'KeyBank Center',
            link: '/api/v1/venues/5039',
            city: 'Buffalo',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'BUF',
          teamName: 'Sabres',
          locationName: 'Buffalo',
          firstYearOfPlay: 1970,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Buffalo',
          officialSiteUrl: 'http://www.sabres.com/',
          franchiseId: 19,
          active: true,
          primaryColor: '#022D62',
          secondaryColor: '#FAC42D',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/318303268/binary-file/file.svg'
        },
        {
          id: 8,
          name: 'Montréal Canadiens',
          link: '/api/v1/teams/8',
          venue: {
            id: 5028,
            name: 'Bell Centre',
            link: '/api/v1/venues/5028',
            city: 'Montréal',
            timeZone: {
              id: 'America/Montreal',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'MTL',
          teamName: 'Canadiens',
          locationName: 'Montréal',
          firstYearOfPlay: 1909,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Montréal',
          officialSiteUrl: 'http://www.canadiens.com/',
          franchiseId: 1,
          active: true,
          primaryColor: '#C51330',
          secondaryColor: '#022B76',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/309964716/binary-file/file.svg'
        },
        {
          id: 9,
          name: 'Ottawa Senators',
          link: '/api/v1/teams/9',
          venue: {
            id: 5031,
            name: 'Canadian Tire Centre',
            link: '/api/v1/venues/5031',
            city: 'Ottawa',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'OTT',
          teamName: 'Senators',
          locationName: 'Ottawa',
          firstYearOfPlay: 1990,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Ottawa',
          officialSiteUrl: 'http://www.ottawasenators.com/',
          franchiseId: 30,
          active: true,
          primaryColor: '#DD1B33',
          secondaryColor: '#A78652',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/319086486/binary-file/file.svg'
        },
        {
          id: 10,
          name: 'Toronto Maple Leafs',
          link: '/api/v1/teams/10',
          venue: {
            name: 'Scotiabank Arena',
            link: '/api/v1/venues/null',
            city: 'Toronto',
            timeZone: {
              id: 'America/Toronto',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'TOR',
          teamName: 'Maple Leafs',
          locationName: 'Toronto',
          firstYearOfPlay: 1917,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Toronto',
          officialSiteUrl: 'http://www.mapleleafs.com/',
          franchiseId: 5,
          active: true,
          primaryColor: '#061F5C',
          secondaryColor: '#FFF',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/291573114/binary-file/file.svg'
        },
        {
          id: 12,
          name: 'Carolina Hurricanes',
          link: '/api/v1/teams/12',
          venue: {
            id: 5066,
            name: 'PNC Arena',
            link: '/api/v1/venues/5066',
            city: 'Raleigh',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'CAR',
          teamName: 'Hurricanes',
          locationName: 'Carolina',
          firstYearOfPlay: 1979,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Carolina',
          officialSiteUrl: 'http://www.carolinahurricanes.com/',
          franchiseId: 26,
          active: true,
          primaryColor: '#E51A37',
          secondaryColor: '#231F21',
          logo: '//www-league.nhlstatic.com/nhl.com/builds/site-core/80600c08b77b058d3b5615c1aabe57b9d81b2442_1618934609/images/logos/team/current/team-12-light.svg'
        },
        {
          id: 13,
          name: 'Florida Panthers',
          link: '/api/v1/teams/13',
          venue: {
            id: 5027,
            name: 'BB&T Center',
            link: '/api/v1/venues/5027',
            city: 'Sunrise',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'FLA',
          teamName: 'Panthers',
          locationName: 'Florida',
          firstYearOfPlay: 1993,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Florida',
          officialSiteUrl: 'http://www.floridapanthers.com/',
          franchiseId: 33,
          active: true,
          primaryColor: '#CFAB79',
          secondaryColor: '#022C61',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/291015530/binary-file/file.svg'
        },
        {
          id: 14,
          name: 'Tampa Bay Lightning',
          link: '/api/v1/teams/14',
          venue: {
            name: 'AMALIE Arena',
            link: '/api/v1/venues/null',
            city: 'Tampa',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'TBL',
          teamName: 'Lightning',
          locationName: 'Tampa Bay',
          firstYearOfPlay: 1991,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Tampa Bay',
          officialSiteUrl: 'http://www.tampabaylightning.com/',
          franchiseId: 31,
          active: true,
          primaryColor: '#033F7E',
          secondaryColor: '#FFF',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/299109716/binary-file/file.svg'
        },
        {
          id: 15,
          name: 'Washington Capitals',
          link: '/api/v1/teams/15',
          venue: {
            id: 5094,
            name: 'Capital One Arena',
            link: '/api/v1/venues/5094',
            city: 'Washington',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'WSH',
          teamName: 'Capitals',
          locationName: 'Washington',
          firstYearOfPlay: 1974,
          division: {
            id: 25,
            name: 'MassMutual East',
            link: '/api/v1/divisions/25'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Washington',
          officialSiteUrl: 'http://www.washingtoncapitals.com/',
          franchiseId: 24,
          active: true,
          primaryColor: '#022D62',
          secondaryColor: '#E41B37',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/298789884/binary-file/file.svg'
        },
        {
          id: 16,
          name: 'Chicago Blackhawks',
          link: '/api/v1/teams/16',
          venue: {
            id: 5092,
            name: 'United Center',
            link: '/api/v1/venues/5092',
            city: 'Chicago',
            timeZone: {
              id: 'America/Chicago',
              offset: -5,
              tz: 'CDT'
            }
          },
          abbreviation: 'CHI',
          teamName: 'Blackhawks',
          locationName: 'Chicago',
          firstYearOfPlay: 1926,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Chicago',
          officialSiteUrl: 'http://www.chicagoblackhawks.com/',
          franchiseId: 11,
          active: true,
          primaryColor: '#E8A814',
          secondaryColor: '#E8A814',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/301971744/binary-file/file.svg'
        },
        {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          venue: {
            id: 5145,
            name: 'Little Caesars Arena',
            link: '/api/v1/venues/5145',
            city: 'Detroit',
            timeZone: {
              id: 'America/Detroit',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'DET',
          teamName: 'Red Wings',
          locationName: 'Detroit',
          firstYearOfPlay: 1926,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Detroit',
          officialSiteUrl: 'http://www.detroitredwings.com/',
          franchiseId: 12,
          active: true,
          primaryColor: '#E51A37',
          secondaryColor: '#FFF',
          logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/17.svg'
        },
        {
          id: 18,
          name: 'Nashville Predators',
          link: '/api/v1/teams/18',
          venue: {
            id: 5030,
            name: 'Bridgestone Arena',
            link: '/api/v1/venues/5030',
            city: 'Nashville',
            timeZone: {
              id: 'America/Chicago',
              offset: -5,
              tz: 'CDT'
            }
          },
          abbreviation: 'NSH',
          teamName: 'Predators',
          locationName: 'Nashville',
          firstYearOfPlay: 1997,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Nashville',
          officialSiteUrl: 'http://www.nashvillepredators.com/',
          franchiseId: 34,
          active: true,
          primaryColor: '#FDBB31',
          secondaryColor: '#FFF',
          logo: 'https://www-league.nhlstatic.com/nhl.com/builds/site-core/80600c08b77b058d3b5615c1aabe57b9d81b2442_1618934609/images/logos/team/current/team-18-dark.svg'
        },
        {
          id: 19,
          name: 'St. Louis Blues',
          link: '/api/v1/teams/19',
          venue: {
            id: 5076,
            name: 'Enterprise Center',
            link: '/api/v1/venues/5076',
            city: 'St. Louis',
            timeZone: {
              id: 'America/Chicago',
              offset: -5,
              tz: 'CDT'
            }
          },
          abbreviation: 'STL',
          teamName: 'Blues',
          locationName: 'St. Louis',
          firstYearOfPlay: 1967,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'St Louis',
          officialSiteUrl: 'http://www.stlouisblues.com/',
          franchiseId: 18,
          active: true,
          primaryColor: '#05539B',
          secondaryColor: '#F0BE58',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/309991890/binary-file/file.svg'
        },
        {
          id: 20,
          name: 'Calgary Flames',
          link: '/api/v1/teams/20',
          venue: {
            id: 5075,
            name: 'Scotiabank Saddledome',
            link: '/api/v1/venues/5075',
            city: 'Calgary',
            timeZone: {
              id: 'America/Denver',
              offset: -6,
              tz: 'MDT'
            }
          },
          abbreviation: 'CGY',
          teamName: 'Flames',
          locationName: 'Calgary',
          firstYearOfPlay: 1980,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Calgary',
          officialSiteUrl: 'http://www.calgaryflames.com/',
          franchiseId: 21,
          active: true,
          primaryColor: '#DD1B33',
          secondaryColor: '#FCBF57',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/319279446/binary-file/file.svg'
        },
        {
          id: 21,
          name: 'Colorado Avalanche',
          link: '/api/v1/teams/21',
          venue: {
            id: 5064,
            name: 'Ball Arena',
            link: '/api/v1/venues/5064',
            city: 'Denver',
            timeZone: {
              id: 'America/Denver',
              offset: -6,
              tz: 'MDT'
            }
          },
          abbreviation: 'COL',
          teamName: 'Avalanche',
          locationName: 'Colorado',
          firstYearOfPlay: 1979,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Colorado',
          officialSiteUrl: 'http://www.coloradoavalanche.com/',
          franchiseId: 27,
          active: true,
          primaryColor: '#860038',
          secondaryColor: '#860038',
          logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/21.svg'
        },
        {
          id: 22,
          name: 'Edmonton Oilers',
          link: '/api/v1/teams/22',
          venue: {
            id: 5100,
            name: 'Rogers Place',
            link: '/api/v1/venues/5100',
            city: 'Edmonton',
            timeZone: {
              id: 'America/Edmonton',
              offset: -6,
              tz: 'MDT'
            }
          },
          abbreviation: 'EDM',
          teamName: 'Oilers',
          locationName: 'Edmonton',
          firstYearOfPlay: 1979,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Edmonton',
          officialSiteUrl: 'http://www.edmontonoilers.com/',
          franchiseId: 25,
          active: true,
          primaryColor: '#FE4D00',
          secondaryColor: '#FE4D00',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/290013862/binary-file/file.svg'
        },
        {
          id: 23,
          name: 'Vancouver Canucks',
          link: '/api/v1/teams/23',
          venue: {
            id: 5073,
            name: 'Rogers Arena',
            link: '/api/v1/venues/5073',
            city: 'Vancouver',
            timeZone: {
              id: 'America/Vancouver',
              offset: -7,
              tz: 'PDT'
            }
          },
          abbreviation: 'VAN',
          teamName: 'Canucks',
          locationName: 'Vancouver',
          firstYearOfPlay: 1970,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Vancouver',
          officialSiteUrl: 'http://www.canucks.com/',
          franchiseId: 20,
          active: true,
          primaryColor: '#022D56',
          secondaryColor: '#B2B2B3',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/309954422/binary-file/file.svg'
        },
        {
          id: 24,
          name: 'Anaheim Ducks',
          link: '/api/v1/teams/24',
          venue: {
            id: 5046,
            name: 'Honda Center',
            link: '/api/v1/venues/5046',
            city: 'Anaheim',
            timeZone: {
              id: 'America/Los_Angeles',
              offset: -7,
              tz: 'PDT'
            }
          },
          abbreviation: 'ANA',
          teamName: 'Ducks',
          locationName: 'Anaheim',
          firstYearOfPlay: 1993,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Anaheim',
          officialSiteUrl: 'http://www.anaheimducks.com/',
          franchiseId: 32,
          active: true,
          primaryColor: '#B49859',
          secondaryColor: '#B49859',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/299423002/binary-file/file.svg'
        },
        {
          id: 25,
          name: 'Dallas Stars',
          link: '/api/v1/teams/25',
          venue: {
            id: 5019,
            name: 'American Airlines Center',
            link: '/api/v1/venues/5019',
            city: 'Dallas',
            timeZone: {
              id: 'America/Chicago',
              offset: -5,
              tz: 'CDT'
            }
          },
          abbreviation: 'DAL',
          teamName: 'Stars',
          locationName: 'Dallas',
          firstYearOfPlay: 1967,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Dallas',
          officialSiteUrl: 'http://www.dallasstars.com/',
          franchiseId: 15,
          active: true,
          primaryColor: '#216C4D',
          secondaryColor: '#216C4D',
          logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/25.svg'
        },
        {
          id: 26,
          name: 'Los Angeles Kings',
          link: '/api/v1/teams/26',
          venue: {
            id: 5081,
            name: 'STAPLES Center',
            link: '/api/v1/venues/5081',
            city: 'Los Angeles',
            timeZone: {
              id: 'America/Los_Angeles',
              offset: -7,
              tz: 'PDT'
            }
          },
          abbreviation: 'LAK',
          teamName: 'Kings',
          locationName: 'Los Angeles',
          firstYearOfPlay: 1967,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Los Angeles',
          officialSiteUrl: 'http://www.lakings.com/',
          franchiseId: 14,
          active: true,
          primaryColor: '#231F21',
          secondaryColor: '#B2B7BC',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg'
        },
        {
          id: 28,
          name: 'San Jose Sharks',
          link: '/api/v1/teams/28',
          venue: {
            name: 'SAP Center at San Jose',
            link: '/api/v1/venues/null',
            city: 'San Jose',
            timeZone: {
              id: 'America/Los_Angeles',
              offset: -7,
              tz: 'PDT'
            }
          },
          abbreviation: 'SJS',
          teamName: 'Sharks',
          locationName: 'San Jose',
          firstYearOfPlay: 1990,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'San Jose',
          officialSiteUrl: 'http://www.sjsharks.com/',
          franchiseId: 29,
          active: true,
          primaryColor: '#08788B',
          secondaryColor: '#08788B',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/301041748/binary-file/file.svg'
        },
        {
          id: 29,
          name: 'Columbus Blue Jackets',
          link: '/api/v1/teams/29',
          venue: {
            id: 5059,
            name: 'Nationwide Arena',
            link: '/api/v1/venues/5059',
            city: 'Columbus',
            timeZone: {
              id: 'America/New_York',
              offset: -4,
              tz: 'EDT'
            }
          },
          abbreviation: 'CBJ',
          teamName: 'Blue Jackets',
          locationName: 'Columbus',
          firstYearOfPlay: 1997,
          division: {
            id: 26,
            name: 'Discover Central',
            link: '/api/v1/divisions/26'
          },
          conference: {
            id: 6,
            name: 'Eastern',
            link: '/api/v1/conferences/6'
          },
          shortName: 'Columbus',
          officialSiteUrl: 'http://www.bluejackets.com/',
          franchiseId: 36,
          active: true,
          primaryColor: '#022D62',
          secondaryColor: '#FFF',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/301936032/binary-file/file.svg'
        },
        {
          id: 30,
          name: 'Minnesota Wild',
          link: '/api/v1/teams/30',
          venue: {
            id: 5098,
            name: 'Xcel Energy Center',
            link: '/api/v1/venues/5098',
            city: 'St. Paul',
            timeZone: {
              id: 'America/Chicago',
              offset: -5,
              tz: 'CDT'
            }
          },
          abbreviation: 'MIN',
          teamName: 'Wild',
          locationName: 'Minnesota',
          firstYearOfPlay: 1997,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Minnesota',
          officialSiteUrl: 'http://www.wild.com/',
          franchiseId: 37,
          active: true,
          primaryColor: '#035131',
          secondaryColor: '#035131',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/302317224/binary-file/file.svg'
        },
        {
          id: 52,
          name: 'Winnipeg Jets',
          link: '/api/v1/teams/52',
          venue: {
            id: 5058,
            name: 'Bell MTS Place',
            link: '/api/v1/venues/5058',
            city: 'Winnipeg',
            timeZone: {
              id: 'America/Winnipeg',
              offset: -5,
              tz: 'CDT'
            }
          },
          abbreviation: 'WPG',
          teamName: 'Jets',
          locationName: 'Winnipeg',
          firstYearOfPlay: 2011,
          division: {
            id: 28,
            name: 'Scotia North',
            link: '/api/v1/divisions/28'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Winnipeg',
          officialSiteUrl: 'http://winnipegjets.com/',
          franchiseId: 35,
          active: true,
          primaryColor: '#022D62',
          secondaryColor: '#8D8D8E',
          logo: 'https://www-league.nhlstatic.com/nhl.com/builds/site-core/80600c08b77b058d3b5615c1aabe57b9d81b2442_1618934609/images/logos/team/current/team-52-dark.svg'
        },
        {
          id: 53,
          name: 'Arizona Coyotes',
          link: '/api/v1/teams/53',
          venue: {
            id: 5043,
            name: 'Gila River Arena',
            link: '/api/v1/venues/5043',
            city: 'Glendale',
            timeZone: {
              id: 'America/Phoenix',
              offset: -7,
              tz: 'MST'
            }
          },
          abbreviation: 'ARI',
          teamName: 'Coyotes',
          locationName: 'Arizona',
          firstYearOfPlay: 1979,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Arizona',
          officialSiteUrl: 'http://www.arizonacoyotes.com/',
          franchiseId: 28,
          active: true,
          primaryColor: '#98022E',
          secondaryColor: '#F0E3C6',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/309994320/binary-file/file.svg'
        },
        {
          id: 54,
          name: 'Vegas Golden Knights',
          link: '/api/v1/teams/54',
          venue: {
            id: 5178,
            name: 'T-Mobile Arena',
            link: '/api/v1/venues/5178',
            city: 'Las Vegas',
            timeZone: {
              id: 'America/Los_Angeles',
              offset: -7,
              tz: 'PDT'
            }
          },
          abbreviation: 'VGK',
          teamName: 'Golden Knights',
          locationName: 'Vegas',
          firstYearOfPlay: 2016,
          division: {
            id: 27,
            name: 'Honda West',
            link: '/api/v1/divisions/27'
          },
          conference: {
            id: 5,
            name: 'Western',
            link: '/api/v1/conferences/5'
          },
          shortName: 'Vegas',
          officialSiteUrl: 'http://www.vegasgoldenknights.com/',
          franchiseId: 38,
          active: true,
          primaryColor: '#B4985A',
          secondaryColor: '#B4985A',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/290581542/binary-file/file.svg'
        },
        {
          id : 55,
          name : 'Seattle Kraken',
          link : '/api/v1/teams/55',
          venue : {
            name : 'Climate Pledge Arena',
            link : '/api/v1/venues/null',
            city : 'Seattle',
            timeZone : {
              id : 'America/Los_Angeles',
              offset : -7,
              tz : 'PDT'
            }
          },
          abbreviation : 'SEA',
          teamName : 'Kraken',
          locationName : 'Seattle',
          firstYearOfPlay : 2021,
          division : {
            id : 15,
            name : 'Pacific',
            nameShort : 'PAC',
            link : '/api/v1/divisions/15',
            abbreviation : 'P'
          },
          conference : {
            id : 5,
            name : 'Western',
            link : '/api/v1/conferences/5'
          },
          franchise : {
            franchiseId : 39,
            teamName : 'Kraken',
            link : '/api/v1/franchises/39'
          },
          shortName : 'Seattle',
          officialSiteUrl : 'https://www.nhl.com/seattle',
          franchiseId : 39,
          active : true,
          primaryColor: '#98022E',
          secondaryColor: '#F0E3C6',
          logo: 'https://cms.nhl.bamgrid.com/images/assets/binary/317578370/binary-file/file.svg'

        }
    );

    getTeamAbbrById(id: number): string {
        let retVal = '';
        if (id === 0) { return retVal; }

        TeamsHelper.Teams.forEach(val => {
            if (val.id === id){
                retVal = val.abbreviation;
            }
        });
        return retVal;
    }

    getTeamLogoById(id: number): string {
      let retVal = '';
      if (id === 0) { return retVal; }

      TeamsHelper.Teams.forEach(val => {
          if (val.id === id){
              retVal = val.logo;
          }
      });
      return retVal;
  }
    getTeamPrimaryColorById(id: number): string {
        let retVal = '';
        if (id === 0) { return retVal; }

        TeamsHelper.Teams.forEach(val => {
            if (val.id === id){
                retVal = val.primaryColor;
            }
        });
        return retVal;
    }

    getTeamSecondaryColorById(id: number): string {
      let retVal = '';
      if (id === 0) { return retVal; }

      TeamsHelper.Teams.forEach(val => {
          if (val.id === id){
              retVal = val.secondaryColor;
          }
      });
      return retVal;
  }
}
