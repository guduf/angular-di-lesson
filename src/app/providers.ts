import { InjectionToken, ValueProvider } from '@angular/core';

export const CITY = new InjectionToken('CITY')

export const altCityProvider: ValueProvider = {
  provide: CITY,
  useValue: 'Metropolis'
}