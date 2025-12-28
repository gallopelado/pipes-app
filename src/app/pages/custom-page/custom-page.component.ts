import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
    TitleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Juan José');
  upperCase = signal(true);

  heroes = signal(heroes);
  sortBY = signal<keyof Hero | null>(null);
  searchQuery = signal('');

  changeUpperToLower() {
    if ( this.upperCase() ) {
      this.upperCase.set(false);
      return;
    }

    if ( !this.upperCase() ) {
      this.upperCase.set(true);
    }
  }

}
