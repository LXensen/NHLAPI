import { Position } from './position';
import { Person } from './person';
export interface RosterList {
    copyright: string;
    roster: Array<{
        person: Person;
        jerseyNumber: number;
        position: Position;
      }>;
}
