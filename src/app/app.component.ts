import { Component } from '@angular/core';

import { UserService } from './shared/user.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
    private readonly _userService: UserService
  ) { }
  name = this._userService.currentUser.name;
}
