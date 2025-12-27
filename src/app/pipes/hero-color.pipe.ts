import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(valueColor: Color): string {
    return Color[valueColor];
    // switch(valueColor) {
    //   case 0:
    //     return 'RED';
    //   case 1:
    //     return 'BLACK';
    //   case 2:
    //     return 'BLUE';
    //   case 3:
    //     return 'GREEN';
    //   default:
    //     return 'NO COLOR';
    // }
  }
}
