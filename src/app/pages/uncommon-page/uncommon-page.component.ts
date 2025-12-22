import { Component, signal } from '@angular/core';
import { I18nSelectPipe } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";

const client1 = {
  name: 'Juan',
  gender: 'male',
  age: 34,
  address: 'Villa Elisa, Paraguay'
}

const client2 = {
  name: 'Ada',
  gender: 'female',
  age: 32,
  address: 'Capiatá, Paraguay'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {

    if ( this.client() === client1 ) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

}
