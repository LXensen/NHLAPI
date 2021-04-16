export interface Team {
    leagueRecord: {
        wins: number;
        losses: number;
        ot: number;
        type: string
      };
      score: number;
      team: {
        id: number;
        name: string;
        link: string
      }
}
