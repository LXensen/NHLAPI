export interface TeamMonthlySchedule {
    copyright: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    wait: number;
    dates: Match[];
}

export interface Match {
  date: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalMatches: number;
  games: Array<{
      gamePk: number;
      link: string;
      gameType: string;
      season: string;
      gameDate: string;
      status: {
          abstractGameState: string
          codedGameState: string
          detailedState: string
          statusCode: string
          startTimeTBD: boolean
        }
      teams: {
          away: {
              leagueRecord: {
                  wins: number;
                  losses: number;
                  ot: number;
                  type: string;
                }
              score: number;
              team: {
                  id: number;
                  name: string;
                  link: string;
                }
            };
          home: {
              leagueRecord: {
                  wins: number;
                  losses: number;
                  ot: number;
                  type: string;
                }
              score: number;
              team: {
                  id: number;
                  name: string;
                  link: string;
                }
            };
        };
      venue: {
          name: string;
          link: string;
          id?: number;
        }
      content: {
          link: string;
        }
    }>;
  events: any[];
  matches: any[];
}
