import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular-ivy";

import { AppModule } from './app/app.module';

Sentry.init({
  dsn: "https://944667dbdd69bd9440836a286b7ad33d@o4505656844156928.ingest.sentry.io/4506258565365760",
  // integrations: [
  //   new Sentry.BrowserTracing({
  //     // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled /^http:\/\/localhost:9002/,
  //     tracePropagationTargets: [/^http:\/\/customer-api.lettucesocial\.com\//],
  //     routingInstrumentation: Sentry.routingInstrumentation,
  //   }),
  //   new Sentry.Replay(),
  // ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
  .then((success) => console.log('Bootstrap success'))
  .catch(err => console.error(err));
