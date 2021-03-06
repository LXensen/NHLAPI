export interface StatsSingleSeason {
    copyright: string;
    stats: Array<{
          type: {
              displayName: string;
              gameType: {
                  id: string;
                  description: string;
                  postseason: boolean;
              };
          };
         splits: Array<{
          season: string;
          stat: {
                timeOnIce: string;
                assists: number;
                goals: number;
                pim: number;
                shots: number;
                games: number;
                hits: number;
                powerPlayGoals: number;
                powerPlayPoints: number;
                powerPlayTimeOnIce: string;
                evenTimeOnIce: string;
                penaltyMinutes: string;
                faceOffPct: number;
                shotPct: number;
                gameWinningGoals: number;
                overTimeGoals: number;
                shortHandedGoals: number;
                shortHandedPoints: number;
                shortHandedTimeOnIce: string;
                blocked: number;
                plusMinus: number;
                points: number;
                shifts: number;
                timeOnIcePerGame: string;
                evenTimeOnIcePerGame: string;
                shortHandedTimeOnIcePerGame: string;
                powerPlayTimeOnIcePerGame: string;
            };
      }>;
    }>;
}
