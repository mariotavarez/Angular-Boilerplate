import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { defineCustomElements } from 'maxill-ui/loader';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => err);

defineCustomElements(window);
