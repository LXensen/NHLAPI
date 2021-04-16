import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortSeason'
})
export class ShortSeasonPipe implements PipeTransform {

  transform(season: string): string {
    return `${season.substring(0, 4)}-${season.substring(6, 8)}`;
  }

}
