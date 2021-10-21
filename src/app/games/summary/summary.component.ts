import { StatDataItem } from './../teams-game-stat/StatDataItem';
import { BoxScore } from './../model/box-score';
import { LineScore } from './../model/line-score';
import { ScheduleService } from './../service/schedule.service';
import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  linescore$!: Observable<LineScore>;
  boxscore$!: Observable<BoxScore>;
  linescore!: LineScore;
  boxscore!: BoxScore;

  hitsStatItem!: StatDataItem;
  shotsStatItem!: StatDataItem;
  blockedShotsStatItem!: StatDataItem;
  turnoversStatItem!: StatDataItem;
  PIMSStatItem!: StatDataItem;

  shotsStyle = 'background-color: #fff';
  goalsStyle = 'background-color: #ccc';

  firstPerHome = '-';
  firstPerAway = '-';
  secondPerHome = '-';
  secondPerAway = '-';
  thirdPerHome = '-';
  thirdPerAway = '-';
  totalHome = '-';
  totalAway = '-';
  displaying = 'goals';

  constructor(private route: ActivatedRoute,
              private scheduleService: ScheduleService) {
      this.route.paramMap.subscribe(params => {
        // tslint:disable-next-line: no-non-null-assertion
        const id = params.get('id')!.toString();
        this.getLineScore(id);
        this.getBoxscore(id);
      });
    }

ngOnInit(): void {
}

getBoxscore(id: string): void {
this.boxscore$ = this.scheduleService.getBoxScore(id);

this.scheduleService.getBoxScore(id).subscribe(data => {
  this.boxscore = data;

  this.hitsStatItem = {
        Title: 'Hits',
        AwayID: this.boxscore.teams.away.team.id,
        HomeID: this.boxscore.teams.home.team.id,
        AwayValue: this.boxscore.teams.away.teamStats.teamSkaterStats.hits,
        HomeValue: this.boxscore.teams.home.teamStats.teamSkaterStats.hits
      };

  this.shotsStatItem = {
        Title: 'Shots',
        AwayID: this.boxscore.teams.away.team.id,
        HomeID: this.boxscore.teams.home.team.id,
        AwayValue: this.boxscore.teams.away.teamStats.teamSkaterStats.shots,
        HomeValue: this.boxscore.teams.home.teamStats.teamSkaterStats.shots};

  this.blockedShotsStatItem = {Title: 'Blocked Shots',
        AwayID: this.boxscore.teams.away.team.id,
        HomeID: this.boxscore.teams.home.team.id,
        AwayValue: this.boxscore.teams.away.teamStats.teamSkaterStats.blocked,
        HomeValue: this.boxscore.teams.home.teamStats.teamSkaterStats.blocked};

  this.turnoversStatItem = {Title: 'Turnovers',
        AwayID: this.boxscore.teams.away.team.id,
        HomeID: this.boxscore.teams.home.team.id,
        AwayValue: this.boxscore.teams.away.teamStats.teamSkaterStats.giveaways,
        HomeValue: this.boxscore.teams.home.teamStats.teamSkaterStats.giveaways};

  this.PIMSStatItem = {Title: 'PIMS',
        AwayID: this.boxscore.teams.away.team.id,
        HomeID: this.boxscore.teams.home.team.id,
        AwayValue: this.boxscore.teams.away.teamStats.teamSkaterStats.pim,
        HomeValue: this.boxscore.teams.home.teamStats.teamSkaterStats.pim};
  });
}

getLineScore(id: string): void {
// this.scheduleService.getLineScore(id).subscribe(data => {
//   this.linescore = data;
// });

this.linescore$ = timer(0, 10000)
    .pipe(
    concatMap(linescore => this.scheduleService.getLineScore(id)),
    map((response: LineScore) => {
      this.linescore = response;

      this.displayData(this.displaying);

      return response;
    }));
}

displayData(type: string): void {
  if(type === 'shots'){
    this.displaying = type;
    this.goalsStyle = 'background-color: #fff';
    this.shotsStyle = 'background-color: #ccc';

    this.firstPerAway = this.linescore.periods[0]?.away.shotsOnGoal.toString();
    this.firstPerHome = this.linescore.periods[0]?.home.shotsOnGoal.toString();

    this.secondPerAway = this.linescore.periods[1]?.away.shotsOnGoal.toString();
    this.secondPerHome = this.linescore.periods[1]?.home.shotsOnGoal.toString();

    this.thirdPerAway = this.linescore.periods[2]?.away.shotsOnGoal.toString();
    this.thirdPerHome = this.linescore.periods[2]?.home.shotsOnGoal.toString();

    this.totalAway = this.linescore.teams.away.shotsOnGoal.toString();
    this.totalHome = this.linescore.teams.home.shotsOnGoal.toString();
  }

  if(type === 'goals'){
    this.displaying = type;
    this.goalsStyle = 'background-color: #ccc';
    this.shotsStyle = 'background-color: #fff';

    this.firstPerAway = this.linescore.periods[0]?.away.goals.toString();
    this.firstPerHome = this.linescore.periods[0]?.home.goals.toString();

    this.secondPerAway = this.linescore.periods[1]?.away.goals.toString();
    this.secondPerHome = this.linescore.periods[1]?.home.goals.toString();

    this.thirdPerAway = this.linescore.periods[2]?.away.goals.toString();
    this.thirdPerHome = this.linescore.periods[2]?.home.goals.toString();

    this.totalAway = this.linescore.teams.away.goals.toString();
    this.totalHome = this.linescore.teams.home.goals.toString();
  }
}
}
