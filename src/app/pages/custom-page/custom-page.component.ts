import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Juan José');

  upperCase = signal(true);

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
