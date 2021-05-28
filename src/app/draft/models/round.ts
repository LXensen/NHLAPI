import { Pick } from './pick';

export interface Round {
    roundNumber: number;
    round: string;
    picks: Pick[];
}
