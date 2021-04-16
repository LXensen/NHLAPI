export interface BoxScore {
    copyright: string;
    teams: {
      away: {
        team: {
          id: number;
          name: string;
          link: string;
        };
        teamStats: {
          teamSkaterStats: {
            goals: number;
            pim: number;
            shots: number;
            powerPlayPercentage: number;
            powerPlayGoals: number;
            powerPlayOpportunities: number;
            faceOffWinPercentage: number;
            blocked: number;
            takeaways: number;
            giveaways: number;
            hits: number
          };
        };
      },
      home: {
        team: {
          id: number;
          name: string;
          link: string;
        };
        teamStats: {
          teamSkaterStats: {
            goals: number;
            pim: number;
            shots: number;
            powerPlayPercentage: number;
            powerPlayGoals: number;
            powerPlayOpportunities: number;
            faceOffWinPercentage: number;
            blocked: number;
            takeaways: number;
            giveaways: number;
            hits: number
          };
        };
      };
    };
}
