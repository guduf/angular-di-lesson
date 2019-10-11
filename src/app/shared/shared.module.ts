import { NgModule, InjectionToken, ClassProvider, LOCALE_ID, FactoryProvider, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service'
import { CustomListComponent } from './custom_list.component'
import { JsonListComponent } from './json_list.component'
import { JsonListItemComponent } from './json_list_item.component'

export const CITY = new InjectionToken('CITY')

export const cityProvider: ValueProvider = {
  provide: CITY,
  useValue: 'Gotham City'
}

export class UserServiceMock implements UserService {
  currentUser = {name: 'Oswald Cobblepot'}
}

export const userServiceProvider: ClassProvider = {
  provide: UserService,
  useClass: UserServiceMock
}

export const TITLE = new InjectionToken('TITLE')

export const titleProvider: FactoryProvider = {
  provide: TITLE,
  deps: [LOCALE_ID],
  useFactory: (locale: string) => locale.startsWith('fr') ? 'Office de tourisme' : 'Tourism Office'
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomListComponent,
    JsonListComponent,
    JsonListItemComponent
  ],
  exports: [
    CommonModule,
    JsonListComponent
  ],
  providers: [
    // UserService,
    userServiceProvider,
    cityProvider,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    titleProvider
  ],
  entryComponents: [
    JsonListItemComponent
  ]
})
export class SharedModule { }
