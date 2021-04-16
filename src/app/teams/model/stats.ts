export interface Stats {
    copyright: string;
    stats: [
      {
        type: {
          displayName: string;
          gameType: {
            id: string;
            description: string;
            postseason: boolean
          }
        };
        splits: [
          {
            stat: {
              gamesPlayed: number;
              wins: number;
              losses: number;
              ot: number;
              pts: number;
              ptPctg: string;
              goalsPerGame: number;
              goalsAgainstPerGame: number;
              evGGARatio: number;
              powerPlayPercentage: string;
              powerPlayGoals: number;
              powerPlayGoalsAgainst: number;
              powerPlayOpportunities: number;
              penaltyKillPercentage: string;
              shotsPerGame: number;
              shotsAllowed: number;
              winScoreFirst: number;
              winOppScoreFirst: number;
              winLeadFirstPer: number;
              winLeadSecondPer: number;
              winOutshootOpp: number;
              winOutshotByOpp: number;
              faceOffsTaken: number;
              faceOffsWon: number;
              faceOffsLost: number;
              faceOffWinPercentage: string;
              shootingPctg: number;
              savePctg: number;
            };
            team: {
              id: 1;
              name: string;
              link: string
            }
          }
        ]
      },
      {
        type: {
          displayName: string;
          gameType: null
        };
        splits: [
          {
            stat: {
              wins: string;
              losses: string;
              ot: string;
              pts: string;
              ptPctg: string;
              goalsPerGame: string;
              goalsAgainstPerGame: string;
              evGGARatio: string;
              powerPlayPercentage: string;
              powerPlayGoals: string;
              powerPlayGoalsAgainst: string;
              powerPlayOpportunities: string;
              penaltyKillOpportunities: string;
              penaltyKillPercentage: string;
              shotsPerGame: string;
              shotsAllowed: string;
              winScoreFirst: string;
              winOppScoreFirst: string;
              winLeadFirstPer: string;
              winLeadSecondPer: string;
              winOutshootOpp: string;
              winOutshotByOpp: string;
              faceOffsTaken: string;
              faceOffsWon: string;
              faceOffsLost: string;
              faceOffWinPercentage: string;
              savePctRank: string;
              shootingPctRank: string;
            };
            team: {
              id: number;
              name: string;
              link: string;
            }
          }
        ]
      }
    ];
}
