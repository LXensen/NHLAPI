import { Game } from './game';

export interface ScheduleDate {
    date: Date;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    games: Array<Game>;
}
