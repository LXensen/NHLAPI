import { Team } from './team';

export interface Game {
    gamePk: number;
    link: string;
    gameType: string;
    season: string;
    gameDate: Date;
    status: {
      abstractGameState: string;
      codedGameState: string;
      detailedState: string;
      statusCode: string;
      startTimeTBD: boolean
    };
    teams: Array<Team>;
    venue: {
        id: number;
        name: string;
        link: string

    };
}
