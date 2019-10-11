import { Component, Inject } from '@angular/core';

import { UserService } from './shared/user.service'
import { TITLE, CITY } from './shared/shared.module' 
// import { CITY } from './providers' 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
    @Inject(TITLE)
    readonly title: string,
    @Inject(CITY)
    readonly city: string,
    private readonly _userService: UserService
  ) { }
  name = this._userService.currentUser.name;
}
