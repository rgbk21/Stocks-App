// Import dependencies
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// If production is enabled, turn off Angular Developer mode
if (environment.production) {
  enableProdMode();
}

// Bootstraps the app module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
