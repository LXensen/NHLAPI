export interface StatsCareer {
    copyright: string;
    stats: Array<{
          type: {
                  displayName: string;
                  gameType: any;
              },
          splits: Array<{
      season: string;
      stat: {
          assists: number;
          goals: number;
          pim: number;
          games: number;
          penaltyMinutes: string;
          points: number;
          powerPlayGoals?: number;
          shortHandedGoals?: number;
          plusMinus?: number;
          timeOnIce?: string;
          powerPlayTimeOnIce?: string;
          evenTimeOnIce?: string;
          faceOffPct?: number;
          shortHandedTimeOnIce?: string;
          shifts?: number;
          shots?: number;
          hits?: number;
          powerPlayPoints?: number;
          shotPct?: number;
          gameWinningGoals?: number;
          overTimeGoals?: number;
          shortHandedPoints?: number;
          blocked?: number;
      }
      team: {
          name: string;
          link: string;
          id?: number;
      },
      league: {
          name: string;
          link: string;
          id?: number;
      },
      sequenceNumber: number;
      }>
  }>;
}
