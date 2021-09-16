export interface Prospect {
    id?: number;
    fullName: string;
    link: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    birthCountry: string;
    birthCity: string;
    height: string;
    weight: number;
    shootsCatches: string;
    primaryPosition: {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
    };
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
