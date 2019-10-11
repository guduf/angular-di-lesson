import { Component, Input, Inject } from '@angular/core';
import { JsonListItemComponent } from './json_list_item.component'

@Component({
  selector: 'json-list',
  template: `<custom-list [items]="items" [listItemCmp]="listItemCmp"></custom-list>`
})
export class JsonListComponent  {
  listItemCmp = JsonListItemComponent
  items = [
    {name: 'Dick Grayson'},
    {name: 'Jason Todd'},
    {name: 'Tim Drake'}
  ]
}
