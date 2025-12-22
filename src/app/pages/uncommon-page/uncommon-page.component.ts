import { Component, signal } from '@angular/core';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';
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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe],
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

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando'
  });

  clients = signal([
    'Maria', 'Pedro', 'Celina', 'Patricio', 'Jessie', 'Abuncio'
  ])

  deleteClient() {
    this.clients.update( cl => cl.slice(0, -1) )
  }

}
