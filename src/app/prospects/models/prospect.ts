import { PlayerPrimaryPosition } from '../../shared/models/player-primary-position';
export interface Prospect {
    id?: number;
    fullName: string;
    link: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    birthCounty: string;
    height: string;
    weight: number;
    shootsCatches: string;
    primaryPosition: PlayerPrimaryPosition;
    draftStatus: string;
    prospectCategory: {
        id: number;
        shortName: string;
        name: string;
    };
    amateurTeam: {
        link: string;
        name: string;
    };
    amateurLeague: {
        link: string;
        name: string;
    };
    ranks: {
        finalRank: number;
        draftYear: number;
    }
}
