import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ENV_CONF } from '../environments/enviroment.token';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: ENV_CONF, useValue: environment },
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    }}
  ]
};
