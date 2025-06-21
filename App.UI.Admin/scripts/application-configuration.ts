import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgEventBus } from 'ng-event-bus';
import { RouteConfiguration } from '@scripts/route-configuration';
import { LoadingInterceptor } from '@utilities/Loading.interceptor';
import { configureLogging, configureAuthentication } from '@scripts/httpclient-configuration';

export const ApplicationConfiguration: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(RouteConfiguration),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([configureLogging, configureAuthentication])),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    provideAnimations(),
    provideAnimationsAsync(),
    FormsModule,
    ToastrModule,
    NgEventBus,
  ]
}; 