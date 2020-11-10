import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'gamelinesfilter'})
export class GameLinesFilter implements PipeTransform {
  transform(slotGamesList: Array<any>, filterBy?: any): any {
    if (!Object.keys(filterBy).length) {
        return slotGamesList;
    }

    return slotGamesList.filter(slotGame => {
        if (filterBy.isNewGame && filterBy.isNewGame === slotGame.isNewGame) {
            return true;
        }

        if (filterBy.lineNumbers && parseInt(filterBy.lineNumbers) === Math.round(Math.floor(slotGame.lineNumbers / 10)) * 10) {
            return true;
        }

        return false;
    })
  }
}
