import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
  currentUser = {name: 'Bruce Wayne'}
  constructor() {
    console.log("Instanciate UserService")
  }
}