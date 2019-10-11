import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { UserService } from './shared/user.service';
import { altCityProvider } from './providers';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    // {provide: LOCALE_ID, useValue: 'en-US'},
    altCityProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
