// aqui va el locale para español
import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

// idioma español, incluir LOCALE_ID del angular/core
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-PY';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

import { routes } from './app.routes';
import { LocaleService } from './services/locale.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      // useValue: 'es'
      deps: [LocaleService],
      useFactory:
        ( localeService: LocaleService ) => localeService.getLocale,
    },
  ]
};
