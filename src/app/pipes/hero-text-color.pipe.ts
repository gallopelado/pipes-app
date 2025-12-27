import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor'
})

export class HeroTextColorPipe implements PipeTransform {
  transform(value: Color, ...args: any[]): string {
    return ColorMap[value];
  }
}
