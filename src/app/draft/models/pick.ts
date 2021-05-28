import { Prospect } from './prospect';
import { Team } from './team';

export interface Pick {
    year: number;
    round: string;
    pickOverall: number;
    pickInRound: number;
    team: Team;
    prospect: Prospect;
}
