import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { catsInterceptor } from './app/data/interceptors/cats.interceptor';
import { CatsRepository } from './app/core/repositories/cats.repository';
import { CatsService } from './app/data/services/cats.service';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

addIcons({
  'search-outline': searchOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: CatsRepository, useExisting: CatsService },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(
      withInterceptors([catsInterceptor])
    )
  ],
});
